export const checkSignInStatus = () => {
  const token = localStorage.getItem('access');

  return token ? true : false;
};
