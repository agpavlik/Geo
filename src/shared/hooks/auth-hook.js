import { useState, useCallback, useEffect } from "react";

// Its outside becouse this not data which should render
let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  // Manage login/logout
  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    // When a user login, we set a timer after which the user log out.
    // Store the expected expiration date.
    const tokenExpDate =
      // Get current date and get number of milliseconds since the beginning of time.
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpDate);
    // Save token in local storage
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpDate.toISOString(),
        // This is a special kind of string which stores date information and which can be converted back to a date.
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  // Set the timer whenever token changes.
  // Log in - set a new timer, log out - clear the timer.
  useEffect(() => {
    if (token && tokenExpirationDate) {
      // Calculate the remaining time
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  // Function check local storage for a token.
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId };
};
