import { Button, Stack } from '@mui/material';
import TextFieldWithLabel from '../../../common/TextFieldWithLabel/TextFieldWithLabel';
import { useEffect, useState } from 'react';
import { BLANK_PROFILE_DETAILS_FORM_DATA } from './constants';
import { userAPI } from '../../../services/user';

export default function EditProfileDetails({ profileData, handleClose }) {
  const [formData, setFormData] = useState(BLANK_PROFILE_DETAILS_FORM_DATA);
  const [updateUser] = userAPI.useUpdateUserMutation();

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
    if (isFormDisabled()) {
      return;
    }

    const formattedData = Object.values(formData).reduce((acc, el) => {
      if (el.value) {
        acc[el.id] = el.value;
      }
      return acc;
    }, {});

    const data = {
      firstname: formattedData.firstname,
      surname: formattedData.surname,
    };

    try {
      const response = await updateUser({ data: data }).unwrap();
      console.debug(response);
    } catch (e) {
      // eat the exception
      console.debug(e);
    } finally {
      handleClose();
    }
  };

  useEffect(() => {
    if (profileData) {
      const draftProfileDetails = { ...BLANK_PROFILE_DETAILS_FORM_DATA };
      draftProfileDetails.email.value = profileData.email;
      draftProfileDetails.firstname.value = profileData.firstname;
      draftProfileDetails.surname.value = profileData.surname;
      setFormData(draftProfileDetails);
    }
  }, [profileData]);

  return (
    <Stack spacing={1}>
      <TextFieldWithLabel
        id={formData.email.id}
        name={formData.email.name}
        label={formData.email.label}
        placeholder={formData.email.placeholder}
        value={formData.email.value}
        handleChange={handleChange}
        error={Boolean(formData.email['errorMsg'].length)}
        helperText={formData.email['errorMsg']}
      />
      <TextFieldWithLabel
        id={formData.firstname.id}
        name={formData.firstname.name}
        label={formData.firstname.label}
        placeholder={formData.firstname.placeholder}
        value={formData.firstname.value}
        handleChange={handleChange}
        error={Boolean(formData.firstname['errorMsg'].length)}
        helperText={formData.firstname['errorMsg']}
      />
      <TextFieldWithLabel
        id={formData.surname.id}
        name={formData.surname.name}
        label={formData.surname.label}
        placeholder={formData.surname.placeholder}
        value={formData.surname.value}
        handleChange={handleChange}
        error={Boolean(formData.surname['errorMsg'].length)}
        helperText={formData.surname['errorMsg']}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
}
