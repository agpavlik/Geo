import { createContext } from "react";

// Context allows to pass data between any
// components in application without using props

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});
