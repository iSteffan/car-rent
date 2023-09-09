import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdverts,
  fetchAdvertsPerPage,
  fetchAdvertsAmount,
} from 'redux/advertOperations';
import { selectAdverts, selectAmount } from 'redux/advertSlice';
import { CarCard } from 'components/CarCard/CarCard';
import { List } from './Catalog.styled';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(fetchAdverts());
    dispatch(fetchAdvertsAmount());
  }, [dispatch]);

  const onLoadMoreClick = () => {
    dispatch(fetchAdvertsPerPage(page));
    setPage(prevPage => prevPage + 1);
  };

  const items = useSelector(selectAdverts);
  const itemsAmount = useSelector(selectAmount);

  return (
    <div>
      <List>
        {items.map(item => (
          <CarCard key={item.id} item={item} />
        ))}
      </List>

      {itemsAmount.length - items.length > 0 && (
        <LoadMoreBtn onClick={onLoadMoreClick} />
      )}
    </div>
  );
};

export default Catalog;
