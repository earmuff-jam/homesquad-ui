/**
 * ENDPOINT used to retrieve api details
 */
export const ENDPOINT = 'https://homesquad-staging.muglan.app/';
// export const ENDPOINT = 'http://localhost:3000/';

/**
 * prepareHeaders function is used to derieve headers
 * for the application. currently, we use the local storage to populate
 * the header if the userID is present and the valid jwt auth is present.
 * @param {Object} headers - the headers used in http request
 * @returns updated headers with a valid jwt token
 */

const getCookie = function (name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
};

export const prepareHeaders = async (headers) => {
  headers.set('X-CSRF-Token', getCookie('CSRF-TOKEN'));
  return headers;
};
