import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { add, remove, filterContact } from './actions';

const initialStateContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Putin Huylo', number: '666-18-03' },
    { id: 'id-3', name: 'Вася Лаптеногий', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const initialStateFilter = {
  keyword: '',
};

const contacts = createReducer(initialStateContacts, {
  [add]: (state, { payload }) => {
    const contacts = [...state, payload];
    return contacts;
  },
  [remove]: (state, { payload }) => {
    const contacts = state.filter(({ id }) => id !== payload);
    return [...contacts];
  },
});

const filter = createReducer(initialStateFilter, {
  [filterContact]: ({ keyword }, { payload }) => {
    keyword = payload;
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
