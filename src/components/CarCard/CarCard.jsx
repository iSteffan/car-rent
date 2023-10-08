import { useState } from 'react';
import { CardContainer, Image } from './CarCard.styled';
import { CarData } from 'components/CarCard/components/CarData/CarData';
import { LearnMoreBtn } from 'components/CarCard/components/LearnMoreBtn/LearnMoreBtn';
import { AddToFavorBtn } from 'components/CarCard/components/AddToFavorBtn/AddToFavorBtn';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
// import Car from '../../img/empty.jpg';

export const CarCard = ({ item }) => {
  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);
  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <li>
      <CardContainer>
        {/* {item.img.endsWith('.jpeg') || item.img.endsWith('.jpeg') ? (
          <Image src={item.img} alt={item.description} />
        ) : (
          <Image src={Car} alt={item.description} />
        )} */}
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
