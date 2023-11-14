import styled from 'styled-components';

import { ErrorMessage, Field, Form } from 'formik';
import { Button } from '../../styles/Base.styled';

export const FormContainer = styled(Form)`
  margin: 0 auto;
  padding: 20px;
  display: grid;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  color: #2a5d8a;
  font-weight: 700;
  font-size: 22px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Label = styled.label`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 10px;
  align-items: center;
  color: #2a5d8a;
  font-weight: 700;
  font-size: 22px;
`;
export const Input = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const ButtonSubmit = styled(Button)`
  padding: 16px;
  font-size: 24px;
  &:not(:disabled):hover {
    background-color: white;
    color: #2a5d8a;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  font-weight: 400;
  grid-column-start: 2;
`;
