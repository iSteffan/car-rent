import React, { useState, useEffect } from 'react';
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
  const [filteredItems, setFilteredItems] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

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

  const carModels = findUniqueBrand(itemsAmount);
  const rentalPriceRange = extractRentalPricesInRange(itemsAmount);

  const searchFilter = searchParam => {
    if (!searchParam) {
      setIsFiltering(false);
      return false;
    }

    const filteredCars = itemsAmount.filter(
      car => car.make === searchParam.make
    );

    const targetRentalPrice = parseInt(
      searchParam.rentalPrice.replace('$', ''),
      10
    );

    const filteredByRentalPrice = filteredCars.filter(
      car => parseInt(car.rentalPrice.replace('$', ''), 10) <= targetRentalPrice
    );

    const filteredByMileage = filteredByRentalPrice.filter(
      car =>
        car.mileage >= parseInt(searchParam.fromMileage, 10) &&
        car.mileage <= parseInt(searchParam.toMileage, 10)
    );

    const sortedCars = filteredByMileage.sort((a, b) => a.mileage - b.mileage);

    setFilteredItems(sortedCars);
    setIsFiltering(true);

    return sortedCars;
  };

  const renderItems = filteredItems ? filteredItems : items;

  return (
    <Container>
      <SearchForm
        data={carModels}
        priceRange={rentalPriceRange}
        onSave={searchFilter}
      />
      {isLoading && (
        <div style={{ marginTop: '200px' }}>
          <Loader />
        </div>
      )}
      <List>
        {renderItems.map(item => (
          <CarCard key={item.id} item={item} />
        ))}
      </List>
      {!isFiltering && itemsAmount.length - items.length > 0 && (
        <LoadMoreBtn onClick={onLoadMoreClick} />
      )}
      {error && <p>Oops, something wrong is going on...</p>}
    </Container>
  );
};

export default Catalog;
