import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../store/action/userActions'

/**
 * This provider is created
 * to access user in whole app
 */

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            let payload={
              username:email,password
            }
           await dispatch(login(payload));
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) =>{
          try {
            await auth().createUserWithEmailAndPassword(email, password)
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};