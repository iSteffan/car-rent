import { CardContainer, Image } from './CarCard.styled';
import { CarData } from 'components/CarData/CarData';
import { LearnMoreBtn } from 'components/LearnMoreBtn/LearnMoreBtn';
import { AddToFavorBtn } from 'components/AddToFavorBtn/AddToFavorBtn';

export const CarCard = ({ item }) => {
  return (
    <li>
      <CardContainer>
        <Image src={item.img} alt={item.description} />
        <AddToFavorBtn data={item} />
        <CarData data={item} />
        <LearnMoreBtn data={item} />
      </CardContainer>
    </li>
  );
};
