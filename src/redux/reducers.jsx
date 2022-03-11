import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { add, remove, filterContact } from './actions';

const initialStateContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'putin Huylo:)', number: '666-18-03' },
    { id: 'id-3', name: 'Slava Ukraine', number: '123-21-03' },
    { id: 'id-4', name: 'ramzan DonDon', number: '227-91-26' },
  ],
};
const initialStateFilter = {
  keyword: '',
};

const contacts = createReducer(initialStateContacts, {
  [add]: (state, { payload }) => [...state, payload],

  [remove]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer(initialStateFilter, {
  [filterContact]: (state, { payload }) => {
    state.keyword = payload;
  },
});

const persistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};
const rootReducer = combineReducers({
  contacts,
  filter,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
