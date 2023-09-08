import { Formik, Field, Form } from 'formik';
// import {
//   // Label,
//   // Form,
//   // Field,
//   // Btn,
// } from './SearchForm.styled';

export const SearchForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          // id: nanoid()
        });
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor="select1">Car brand</label>
          <Field as="select" name="select1" id="select1">
            <option value="" label="Виберіть" />
            {/* {selectOptions.map((option, index) => (
              <option key={index} value={option} label={option} />
            ))} */}
          </Field>
        </div>
        <div>
          <label htmlFor="input1">Сar mileage / km:</label>
          <Field type="text" name="input1" id="input1" />
        </div>

        <div>
          <label htmlFor="input2">Сar mileage / km</label>
          <Field type="text" name="input2" id="input2" />
        </div>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
