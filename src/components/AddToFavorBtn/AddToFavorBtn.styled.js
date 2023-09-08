import styled from 'styled-components';
import { ReactComponent as FavoriteIcon } from '../../img/heart.svg';

export const Icon = styled(FavoriteIcon)`
  width: 18px;
  height: 18px;
  fill: none;
`;

export const Btn = styled.button`
  padding: 0;
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
