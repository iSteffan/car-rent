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
import { CarCard } from 'components/CarCard/CarCard';
import { List, Container } from './Catalog.styled';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { findUniqueBrand } from 'utils/findUniqueBrand';
import { extractRentalPricesInRange } from 'utils/extractRentalPricesInRange';

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
  console.log(itemsAmount);

  // console.log(uniqueMakesFromArray(itemsAmount));

  const carModels = findUniqueBrand(itemsAmount);
  const rentalPriceRange = extractRentalPricesInRange(itemsAmount);
  // console.log(extractRentalPricesInRange(itemsAmount));

  return (
    <Container>
      {isLoading && (
        <div style={{ marginTop: '200px' }}>
          <Loader />
        </div>
      )}
      <SearchForm data={carModels} priceRange={rentalPriceRange} />
      <List>
        {items.map(item => (
          <CarCard key={item.id} item={item} />
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
