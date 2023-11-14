import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { showWarning } from '../Utils/ToastNotification';
import {
  ButtonSubmit,
  ErrorText,
  FormContainer,
  Input,
  Label,
} from './Form.styled';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\+(?:[0-9] ?){5,14}[0-9]$/,
      'Please enter a valid phone number. The number should start with a "+" and contain between 6 to 14 digits.'
    )
    .required('Required'),
});

const ContactForm = ({ isContactExist, onFormSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name } = values;
    if (isContactExist(name)) {
      showWarning(`${name} is already in contacts!`);
      return;
    }
    onFormSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
      validateOnChange
    >
      <FormContainer autoComplete="off" className={'form'}>
        <Label>
          Name
          <Input type="text" name="name" className={'form__input'} />
          <ErrorText name="name" component="span" />
        </Label>

        <Label>
          Phone number
          <Input type="tel" name="number" className={'form__input'} />
          <ErrorText name="number" component="span" />
        </Label>

        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
