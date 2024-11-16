/**
 * ENDPOINT used to retrieve api details
 */
export const ENDPOINT = 'https://homesquad-staging.muglan.app/';

/**
 * prepareHeaders function is used to derieve headers
 * for the application
 * @param {Object} headers - the headers used in http request
 * @param {Object} state - the current state of the application
 * @returns updated headers with a valid jwt token
 */
export const prepareHeaders = async (headers, { getState }) => {
  const { base = {} } = getState();
  const { user } = base;
  if (user) {
    headers.set('X-User-Identification-Id', user.id);
    headers.set('X-User-Auth-Token', user.authentication_token);
  }
  return headers;
};
