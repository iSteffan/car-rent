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
  // Btn,
} from './SearchForm.styled';

export const SearchForm = ({ onSave, data }) => {
  return (
    <Formik
      initialValues={{
        brand: '',
        rentPrice: '',
      }}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
        });
        actions.resetForm();
      }}
    >
      <Form>
        <Container>
          <BrandContainer>
            <Label htmlFor="brand">Car brand</Label>
            <Field
              as="input"
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
            <Label htmlFor="brand">Price/ 1 hour</Label>
            <Field
              as="input"
              name="rentPrice"
              id="rentPrice"
              list="carBrands"
              placeholder="To $"
            />
            <Datalist
              id="carBrands"
              style={{ width: '224px', height: '272px' }}
            >
              {data.map(option => (
                <option key={option} value={option} />
              ))}
            </Datalist>
          </PriceContainer>
          <Btn type="submit">Search</Btn>
        </Container>
      </Form>
    </Formik>
  );
};

// <div>
//   <label htmlFor="input2">Сar mileage / km</label>
//   <Field type="text" name="input2" id="input2" />
// </div>

// <div>
//   <label htmlFor="input3">Сar mileage / km</label>
//   <Field type="text" name="input3" id="input3" />
// </div>
