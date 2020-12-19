import { useState, useMemo } from 'react';
import authContext from '../../Utils/Context';

export default function AuthProviders({ children }) {
  const [userID, setUserID] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogIn = userID => {
    setUserID(userID);
    setIsLoggedIn(true);
  };

  const onLogOut = () => {
    setUserID(null);
    setIsLoggedIn(false);
  };

  const providerValue = useMemo(() => {
    return { userID, isLoggedIn, onLogIn, onLogOut };
  }, [isLoggedIn, userID]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
