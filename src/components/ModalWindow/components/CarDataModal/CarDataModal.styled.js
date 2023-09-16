import styled from 'styled-components';

export const MainDataBox = styled.div`
  margin-top: 14px;
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.33;
  width: 100%;
  color: #121417;
`;

export const DetailsBox = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 4px;

  height: 40px;
  overflow: hidden;

  p {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  p + p::before {
    content: '';
    width: 6px;
    height: 16px;
    margin: 0 6px;
    border: 1px solid rgba(18, 20, 23, 0.1);
  }
  width: 100%;
`;

export const Description = styled.p`
  font-family: 'ManropeRegular';
  font-size: 14px;
  line-height: 1.42;
`;
