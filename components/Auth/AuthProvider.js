import React, { Children, useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [token, settoken] = useState("token");
  const instance = Axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      Authorization: token,
    },
  });

  const getUserInfo = async () => {
    let result = await instance
      .get("/users/me")
      .then((res) => {
        return setuser(res.data);
      })
      .catch((e) => {
        return console.log(e);
      });
    return result;
  };
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    settoken(token);
  };
  useEffect(() => {
    console.log('useeffect')
    getToken();
    getUserInfo()
  }, []);

  const signIn = async (payload) => {
    const result = await instance
      .post("/users/login", payload)
      .then((res) => res.data);
    const { id } = result;
    await AsyncStorage.setItem("token", id);
    settoken(id);
    instance.defaults.headers["Authorization"] = id;
    getUserInfo();
    return;
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('token')
    settoken(null)
    setuser(null)
  }
  const authFunctions = {
    signIn,
    signOut,
    user,
  };
  return (
    <AuthContext.Provider value={authFunctions}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
