import { Box, MainDataBox, DetailsBox } from './CarData.styled';

export const CarData = ({ data }) => {
  const { make, model, year, rentalPrice } = data;

  return (
    <Box>
      <MainDataBox>
        <p>
          {make}
          <span style={{ color: '#3470FF' }}> {model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </MainDataBox>
      <DetailsBox></DetailsBox>
    </Box>
  );
};
