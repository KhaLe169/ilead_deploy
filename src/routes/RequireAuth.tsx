import { CONFIG } from 'constants/Config';
import { useEffect } from 'react';
import { WithChildrenProps } from 'types/generalTypes';
import cookieUtils from 'utils/cookie';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token = cookieUtils.get('token');

  const redirectUserID = CONFIG.API_USERID;

  useEffect(() => {
    if (!token) {
      window.location.assign(redirectUserID);
      return;
    }
  }, []);



  return children;
};
export default RequireAuth;
