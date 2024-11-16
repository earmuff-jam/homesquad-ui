import dayjs from 'dayjs';

export const formatDateTime = (selectedTime, layout = 'MM-DD-YYYY') => {
  if (selectedTime) {
    return dayjs(selectedTime).format(layout);
  }
  return 'Invalid date';
};

/**
 * function persistUser is used to store userID and authentication in the local storage session
 * @param {Object} data - the current details of the logged in user
 */
export const persistUser = (data) => {
  if (!data) {
    throw new Error(`Failed to find user`);
  }
  localStorage.setItem('access', data.authentication_token);
  localStorage.setItem('userID', data.id);
};

/**
 * function used to log the current logged in user out of the system.
 */
export const logout = () => {
  localStorage.clear();
  window.location.href = '/';
};
