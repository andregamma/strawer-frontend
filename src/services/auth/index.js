import { createContext, useContext } from 'react';
import API from '../api'

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function isAuthenticated(){

    const t = localStorage.getItem("userToken")

    return t !== null;

}


export const getToken = () => {
  const r = localStorage.getItem("userToken");
  console.log(r);
}

export const login = token => {
  localStorage.setItem("userToken", token);
};