import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/favor/favoritesSlice';
import { CarCard } from 'components/CarCard/CarCard';
import { List, Container } from './Catalog.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <List>
        {favorites.map(item => (
          <CarCard key={item.id} item={item} />
        ))}
      </List>
    </Container>
  );
};

export default Favorites;
