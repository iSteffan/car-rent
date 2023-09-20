import {
  Formik,
  // Field,
  // Form,
} from 'formik';
import {
  Label,
  Form,
  // Form,
  Field,
  BrandContainer,
  PriceContainer,
  Datalist,
  Container,
  Btn,
  Fieldset,
  MileageBox,
  FieldMileageFrom,
  FieldMileageTo,
  // Btn,
} from './SearchForm.styled';

export const SearchForm = ({ onSave, data, priceRange }) => {
  return (
    <Formik
      initialValues={{
        brand: '',
        rentPrice: '',
        fromMileage: '',
        toMileage: '',
      }}
      onSubmit={(values, actions) => {
        onSave({ ...values });
        actions.resetForm();
      }}
      // onSubmit={values => {
      //   console.log(values);
      // }}
    >
      <Form>
        <Container>
          <BrandContainer>
            <Label htmlFor="brand">Car brand</Label>
            <Field
              name="brand"
              id="brand"
              list="carBrands"
              placeholder="Enter the text"
            />
            <Datalist
              id="carBrands"
              style={{ width: '224px', height: '272px' }}
            >
              {data.map(option => (
                <option key={option} value={option} />
              ))}
            </Datalist>
          </BrandContainer>
          <PriceContainer>
            <Label htmlFor="rentPrice">Price/ 1 hour</Label>
            <Field
              name="rentPrice"
              id="rentPrice"
              list="priceRange"
              placeholder="To $"
            />
            <Datalist
              id="priceRange"
              style={{ width: '224px', height: '272px' }}
            >
              {priceRange.map(option => (
                <option key={option} value={option} />
              ))}
            </Datalist>
          </PriceContainer>
          <Fieldset>
            <Label htmlFor="fromMileage toMileage">Сar mileage / km</Label>
            <MileageBox>
              <FieldMileageFrom
                name="fromMileage"
                id="fromMileage"
                placeholder="From"
              />
              <FieldMileageTo
                name="toMileage"
                id="toMileage"
                placeholder="To"
              />
            </MileageBox>
          </Fieldset>
          <Btn type="submit">Search</Btn>
        </Container>
      </Form>
    </Formik>
  );
};
