import styled from 'styled-components';
import { Form as FormikForm, Field as FormikInput } from 'formik';

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  line-height: 1.28;
`;

export const Field = styled(FormikInput)`
  padding: 14px 18px;

  border: none;
  border-radius: 14px;
  background: #f7f7fb;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 224px;
`;

export const Datalist = styled.datalist`
  width: 224px;
  height: 272px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;
