import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, fetchAdvertsPerPage } from 'redux/advertOperations';
import { selectAdverts } from 'redux/advertSlice';
import { CarCard } from 'components/CarCard/CarCard';
import { List } from './Catalog.styled';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const Catalog = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const onLoadMoreClick = () => {
    dispatch(fetchAdvertsPerPage(page));
    setPage(prevPage => prevPage + 1);
    console.log('clicked');
  };

  const items = useSelector(selectAdverts);
  // console.log(items);
  return (
    <div>
      <List>
        {items.map(item => (
          <CarCard key={item.id} item={item} />
        ))}
      </List>
      <LoadMoreBtn onClick={onLoadMoreClick} />
      {/* {items.length === 8 && <LoadMoreBtn onClick={onLoadMoreClick} />} */}
    </div>
  );
};

export default Catalog;
