import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { BLANK_USER_LOGIN_FORM } from './constants';
import Person2Rounded from '@mui/icons-material/Person2Rounded';
import { authenticationAPI } from '../../services/authentication';

export default function LoginForm({ setShowSignUpModal, onLoginSuccess }) {
  const [signInMutation] = authenticationAPI.useGetSignInMutation();
  const [formData, setFormData] = useState(BLANK_USER_LOGIN_FORM);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const updatedFormData = { ...formData };
    let errorMsg = '';

    for (const validator of updatedFormData[id].validators) {
      if (validator.validate(value)) {
        errorMsg = validator.message;
        break;
      }
    }

    updatedFormData[id] = {
      ...updatedFormData[id],
      value,
      errorMsg,
    };
    setFormData(updatedFormData);
  };

  const isFormDisabled = () => {
    const containsErr = Object.values(formData).reduce((acc, el) => {
      if (el?.errorMsg) {
        return true;
      }
      return acc;
    }, false);

    const requiredFormFields = Object.values(formData).filter((v) => v?.isRequired);
    const isRequiredFieldsEmpty = requiredFormFields
      .filter((el) => el.type === 'text')
      .some((el) => el.value.trim() === '');

    return containsErr || isRequiredFieldsEmpty;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formattedData = Object.values(formData).reduce((acc, el) => {
      if (el.value) {
        acc[el.id] = el.value;
      }
      return acc;
    }, {});

    const draftRequest = {
      ...formattedData,
    };
    signInMutation({ data: draftRequest }).then((response) => {
      onLoginSuccess(response);
    });
  };

  return (
    <>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Log in
      </Typography>
      <Stack spacing={1}>
        <Typography variant="subtitle2"> Email Address</Typography>
        <TextField
          fullWidth
          id={formData.email.id}
          name={formData.email.id}
          placeholder={formData.email.placeholder}
          value={formData.email.value || ''}
          onChange={handleChange}
          variant="outlined"
          size="small"
          error={Boolean(formData.email['errorMsg'].length)}
          helperText={formData.email['errorMsg']}
        />
        <Typography variant="subtitle2"> Password</Typography>
        <TextField
          fullWidth
          id={formData.password.id}
          name={formData.password.id}
          placeholder={formData.password.placeholder}
          value={formData.password.value || ''}
          onChange={handleChange}
          type={formData.password.type}
          variant="outlined"
          size="small"
          error={Boolean(formData.password['errorMsg'].length)}
          helperText={formData.password['errorMsg']}
        />
      </Stack>
      <Stack direction={'row'} marginTop={'1rem'} spacing={0.4}>
        <Typography variant="caption">Do not have an account? </Typography>
        <Typography
          component="span"
          variant="caption"
          color={'primary'}
          sx={{ cursor: 'pointer' }}
          onClick={() => setShowSignUpModal(true)}
        >
          Sign up
        </Typography>
      </Stack>
      <Stack alignItems={'flex-end'}>
        <Button disabled={isFormDisabled()} startIcon={<Person2Rounded />} variant="outlined" onClick={handleSubmit}>
          Login
        </Button>
      </Stack>
    </>
  );
}
