import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdverts,
  fetchAdvertsPerPage,
  fetchAdvertsAmount,
} from 'redux/advertOperations';
import {
  selectAdverts,
  selectAmount,
  selectIsLoading,
  selectError,
} from 'redux/advertSlice';
import { selectFavorites } from 'redux/favor/favoritesSlice';
import { CarCard } from 'components/CarCard/CarCard';
import { List, Container } from './Catalog.styled';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { Loader } from 'components/Loader/Loader';
// import {
//   addFavor,
//   // deleteFavor
// } from 'redux/favor/favoritesSlice';

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

  const error = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectAdverts);
  const itemsAmount = useSelector(selectAmount);
  const itemsFavorites = useSelector(selectFavorites);

  console.log(itemsFavorites);

  // const doAddFavorite = item => {
  //   dispatch(addFavor(item));
  // };

  return (
    <Container>
      {isLoading && (
        <div style={{ marginTop: '200px' }}>
          <Loader />
        </div>
      )}

      <List>
        {items.map(item => (
          <CarCard
            key={item.id}
            item={item}
            // onClick={doAddFavorite}
          />
        ))}
      </List>

      {itemsAmount.length - items.length > 0 && (
        <LoadMoreBtn onClick={onLoadMoreClick} />
      )}

      {error && <p>Oops, something wrong is going on...</p>}
    </Container>
  );
};

export default Catalog;
