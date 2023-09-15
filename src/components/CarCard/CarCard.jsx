import { useState } from 'react';
import { CardContainer, Image } from './CarCard.styled';
import { CarData } from 'components/CarData/CarData';
import { LearnMoreBtn } from 'components/LearnMoreBtn/LearnMoreBtn';
import { AddToFavorBtn } from 'components/AddToFavorBtn/AddToFavorBtn';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export const CarCard = ({ item }) => {
  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);
  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <li>
      <CardContainer>
        <Image src={item.img} alt={item.description} />
        <AddToFavorBtn data={item} />
        <CarData data={item} />
        <LearnMoreBtn data={item} onClick={handleToggle} />
      </CardContainer>
      {isTaskModalOpened && (
        <ModalWindow data={item} handlerCloseModal={handleToggle}></ModalWindow>
      )}
    </li>
  );
};
