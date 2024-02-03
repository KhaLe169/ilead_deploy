import Cookies from 'js-cookie';

const cookieUtils = {
  get: (key: string) => Cookies.get(key),
  set: (key: string, value: string) => Cookies.set(key, value),
  remove: (key: string) =>
    Cookies.remove(key, {
      secure: window.location.protocol === 'https:',
    }),
};

export default cookieUtils;
