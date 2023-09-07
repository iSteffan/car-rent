import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/advertOperations';
import { selectAdverts } from 'redux/advertSlice';
import { CarCard } from 'components/CarCard/CarCard';
import { List } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const items = useSelector(selectAdverts);
  // console.log(items);
  return (
    <div>
      <List>
        {items.map(item => (
          <CarCard key={item.id} item={item} />
        ))}
      </List>
    </div>
  );
};

export default Catalog;
