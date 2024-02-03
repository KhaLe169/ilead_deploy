export const persistToken = async (token: string) => {
  localStorage.setItem('token', token);
};

export const readToken = async () => {
  return localStorage.getItem('token');
};

export const removeToken = async () => {
  localStorage.removeItem('token');
};

export const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;
  if (remainingDuration < 0) return 0;
  // convert to minutes and round it
  const convertedRemainingTime = remainingDuration / 1000 / 60;
  if (convertedRemainingTime < 60) {
    return convertedRemainingTime + 'm';
  }
  if (convertedRemainingTime < 1440) {
    return Math.round(convertedRemainingTime / 60) + 'h';
  }
  if (convertedRemainingTime < 43200) {
    return Math.round(convertedRemainingTime / 60 / 24) + 'd';
  }
};
