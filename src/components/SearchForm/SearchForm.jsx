import {
  Formik,
  // Field,
  Form,
} from 'formik';
import {
  Label,
  // Form,
  Field,
  BrandContainer,
  Datalist,
  // Btn,
} from './SearchForm.styled';

export const SearchForm = ({ onSave, data }) => {
  return (
    <Formik
      initialValues={{
        brand: '',
      }}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
        });
        actions.resetForm();
      }}
    >
      <Form>
        <BrandContainer>
          <Label htmlFor="brand">Car brand</Label>
          <Field
            as="input"
            name="brand"
            id="brand"
            list="carBrands"
            placeholder="Enter the text"
          />
          <Datalist id="carBrands" style={{ width: '224px', height: '272px' }}>
            {data.map(option => (
              <option key={option} value={option} />
            ))}
          </Datalist>
        </BrandContainer>
        <button type="submit">Search</button>
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
