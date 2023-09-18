import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { CardContainer, Image } from './CarCard.styled';
import { CarData } from 'components/CarCard/components/CarData/CarData';
import { LearnMoreBtn } from 'components/CarCard/components/LearnMoreBtn/LearnMoreBtn';
import { AddToFavorBtn } from 'components/CarCard/components/AddToFavorBtn/AddToFavorBtn';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
// import {
//   addFavor,
//   // deleteFavor
// } from 'redux/favor/favoritesSlice';

export const CarCard = ({ item, onClick }) => {
  // const dispatch = useDispatch();

  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);
  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <li>
      <CardContainer>
        <Image src={item.img} alt={item.description} />
        <AddToFavorBtn
          data={item}
          // onClick={onClick}
        />
        <CarData data={item} />
        <LearnMoreBtn data={item} onClick={handleToggle} />
      </CardContainer>
      {isTaskModalOpened && (
        <ModalWindow data={item} handlerCloseModal={handleToggle}></ModalWindow>
      )}
    </li>
  );
};
