import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { LOGIN_REQUEST } from 'redux/auth/actionTypes';
import cookieUtils from './cookie';

function AuthProvider({ children }: { children: JSX.Element }) {
  const token = cookieUtils.get('token');
  const [searchParams] = useSearchParams();

  const tokenParams = searchParams.get('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) return;
    if (tokenParams) {
      dispatch({
        type: LOGIN_REQUEST,
        payload: {
          token: tokenParams,
        },
      });
      cookieUtils.set('token', tokenParams as string);
    }
  }, []);

  return children;
}

export default AuthProvider;
