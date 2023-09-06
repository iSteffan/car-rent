import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  text-decoration: none;
  color: #212121;

  &.active {
    color: orange;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Sidebar = styled.aside`
  padding: 30px 40px;

  width: 200px;
  height: 100%;
  border: 1px solid black;
  background-color: rgb(0 0 0 / 6%);
  box-shadow: inset rgba(0, 0, 0, 0.2) 0px 0px 20px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;