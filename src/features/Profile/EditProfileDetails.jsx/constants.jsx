export const BLANK_PROFILE_DETAILS_FORM_DATA = {
  email: {
    id: 'email',
    name: 'email',
    label: 'Email Address',
    placeholder: 'Enter your unqiue email address',
    value: '',
    type: 'email',
    isRequired: true,
    errorMsg: '',
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: 'Value is required',
      },
      {
        validate: (value) => value.trim().length >= 500,
        message: 'Value should be less than 50 characters',
      },
    ],
  },
  firstname: {
    id: 'firstname',
    name: 'firstname',
    label: 'Firstname',
    placeholder: 'Enter your first name',
    value: '',
    type: 'text',
    isRequired: true,
    errorMsg: '',
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: 'Value is required',
      },
      {
        validate: (value) => value.trim().length >= 500,
        message: 'Value should be less than 50 characters',
      },
    ],
  },
  surname: {
    id: 'surname',
    name: 'surname',
    label: 'Lastname',
    placeholder: 'Enter your last name',
    value: '',
    type: 'text',
    isRequired: true,
    errorMsg: '',
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: 'Value is required',
      },
      {
        validate: (value) => value.trim().length >= 500,
        message: 'Value should be less than 50 characters',
      },
    ],
  },
};
