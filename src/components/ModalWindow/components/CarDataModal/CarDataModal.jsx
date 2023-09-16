import { MainDataBox, DetailsBox, Description } from './CarDataModal.styled';
import { extractCity, extractCountry } from 'utils/extractor';

export const CarDataModal = ({ data }) => {
  const {
    id,
    make,
    model,
    year,
    // rentalPrice,
    address,
    // rentalCompany,
    type,
    // mileage,
    // functionalities,
    fuelConsumption,
    engineSize,
    description,
  } = data;

  const city = extractCity(address);
  const country = extractCountry(address);

  return (
    <>
      <MainDataBox>
        <p>
          {make}
          <span style={{ color: '#3470FF' }}> {model}</span>, {year}
        </p>
      </MainDataBox>
      <DetailsBox>
        <p>{city}</p>
        <p>{country}</p>
        <p>id: {id}</p>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
        <p>Fuel Consumption: {fuelConsumption}</p>
        <p>Engine Size: {engineSize}</p>
      </DetailsBox>
      <div>
        <Description>{description}</Description>
      </div>
    </>
  );
};
