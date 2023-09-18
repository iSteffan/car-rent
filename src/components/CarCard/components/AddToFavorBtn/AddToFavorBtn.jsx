import {
  Icon,
  Btn,
  // ActiveIcon
} from './AddToFavorBtn.styled';
import {
  addFavor,
  // deleteFavor
} from 'redux/favor/favoritesSlice';
import { useDispatch } from 'react-redux';

export const AddToFavorBtn = ({ data }) => {
  const dispatch = useDispatch();

  // console.log(data);
  return (
    <>
      <Btn onClick={() => dispatch(addFavor(data))}>
        <Icon />
      </Btn>
      {/* <Btn onClick={() => dispatch(deleteFavor(data))}>
        <Icon />
      </Btn> */}
    </>
  );
};
