import { filterContact } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { FilterInput, FilterWrapper } from './FilterStyle';
import { LabelForm } from '../ContactForm/ContactFormStyle';
import propTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };

  return (
    <FilterWrapper>
      <LabelForm htmlFor="filter">Find contacts by name</LabelForm>
      <div>
        <FilterInput name="filter" type="filter" onChange={handleChange} />
      </div>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  onChange: propTypes.func,
};
