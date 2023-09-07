import { CardContainer, Image } from './CarCard.styled';
import { CarData } from 'components/CarData/CarData';

export const CarCard = ({ item }) => {
  return (
    <li>
      <CardContainer>
        <Image src={item.img} alt={item.description} />
        <CarData data={item} />
      </CardContainer>
    </li>
  );
};
