import * as yup from 'yup';

export const validatePincode = yup
  .string()
  .required('Please enter pincode')
  .min(6, 'Please enter valid pincode')
  .max(6, 'Please enter valid pincode')
  .matches('^[1-9][0-9]{5}$', 'Please enter valid pincode');

export const validateFirstName = yup
  .string()
  .required('Please enter first name')
  .max(100, 'first name should not be more than 100 characters')
  .matches("^[ A-Za-z.,'-]*$", 'Please enter valid first name');

export const validateMiddleName = yup.string().matches("^[ A-Za-z.,'-]*$", 'Please enter valid middle name');

export const validateLastName = yup
  .string()
  .required('Please enter last name')
  .max(100, 'last name should not be more than 100 characters')
  .matches("^[ A-Za-z.,'-]*$", 'Please enter valid last name');

export const validateName = yup
  .string()
  .required('Please enter name')
  .max(100, 'last name should not be more than 100 characters')
  .matches("^[ A-Za-z.,'-]*$", 'Please enter valid name');

export const validateEmail = yup.string().required('Please enter email id').email('Please enter valid email id');

export const validatePhone = yup
  .string()
  .required('Please enter mobile number')
  .min(10, 'Please enter valid mobile number')
  .max(10, 'Please enter valid mobile number')
  .matches('^[1-9][0-9]{9}$', 'Please enter valid mobile number');

export const validateAdhar = yup
  .string()
  .required('Please enter aadhar number')
  .matches('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$', 'Please enter valid aadhar number');

export const validatePancard = yup
  .string()
  .required('Please enter pan card number')
  .min(10, 'Please enter valid pan card number')
  .max(10, 'Please enter valid pan card number')
  .matches('^([A-Za-z]){5}([0-9]){4}([A-Za-z]){1}?$', 'Please enter valid pan card number');

export const validateDateOfBirth = yup.string().required('Please enter date of birth');

export const validateGender = yup.string().required('Please select gender');

export const validateCity = yup.string().required('Please enter city');

export const validateState = yup.string().required('Please enter state');
