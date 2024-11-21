/**
 * ENDPOINT used to retrieve api details
 */
export const ENDPOINT = 'https://homesquad-staging.muglan.app/';

/**
 * prepareHeaders function is used to derieve headers
 * for the application. currently, we use the local storage to populate
 * the header if the userID is present and the valid jwt auth is present.
 * @param {Object} headers - the headers used in http request
 * @returns updated headers with a valid jwt token
 */
export const prepareHeaders = async (headers) => {
  const userID = localStorage.getItem('userID');
  const accessToken = localStorage.getItem('access');
  if (userID) {
    headers.set('X-User-Identification-Id', userID);
    headers.set('X-User-Auth-Token', accessToken);
  }
  return headers;
};
