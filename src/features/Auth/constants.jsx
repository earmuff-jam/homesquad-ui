export const BLANK_USER_LOGIN_FORM = {
  email: {
    id: 'email',
    label: 'User email address',
    placeholder: 'Enter your email address',
    value: '',
    type: 'text',
    isRequired: true,
    errorMsg: '',
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: 'Email Address is required',
      },
      {
        validate: (value) => value.trim().length >= 500,
        message: 'Email Address should be less than 50 characters',
      },
    ],
  },
  password: {
    id: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    value: '',
    type: 'password',
    isRequired: true,
    errorMsg: '',
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: 'Password is required',
      },
    ],
  },
};

/**
 * Signup form
 */
export const BLANK_USER_SIGNUP_FORM = {
  email: {
    id: 'email',
    label: 'User email address',
    placeholder: 'Enter your email address',
    value: '',
    type: 'text',
    isRequired: true,
    errorMsg: '',
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: 'Email Address is required',
      },
      {
        validate: (value) => value.trim().length >= 500,
        message: 'Email Address should be less than 50 characters',
      },
    ],
  },
  password: {
    id: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    value: '',
    type: 'password',
    isRequired: true,
    errorMsg: '',
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: 'Password is required',
      },
    ],
  },
};
