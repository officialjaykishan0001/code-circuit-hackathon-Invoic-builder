export const getToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; token=`);
  return parts.length === 2 ? parts.pop().split(';').shift() : null;
};
