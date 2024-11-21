export const BLANK_GROUP_FORM = {
  name: {
    id: 'name',
    label: 'Group name',
    placeholder: 'Enter group name',
    value: '',
    type: 'text',
    isRequired: true,
    errorMsg: '',
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: 'Group name is required',
      },
      {
        validate: (value) => value.trim().length >= 500,
        message: 'Group name should be less than 500 characters',
      },
    ],
  },
};
