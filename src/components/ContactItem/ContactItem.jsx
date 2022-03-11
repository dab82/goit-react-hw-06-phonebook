import { useDispatch } from 'react-redux';
import { remove } from '../../redux/actions';
import { Item } from './ContactItemStyle';
import { ReactComponent as DeleteIcon } from '../../Icon/delicon.svg';
import { IconButton } from '../Buttons/IconButton';
import propTypes from 'prop-types';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>{name}:</span>
      <span>{number} </span>
      <IconButton
        aria-label="Delete contact"
        onClick={() => dispatch(remove(id))}
      >
        <DeleteIcon />
      </IconButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
