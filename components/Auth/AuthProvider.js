import React, { Children, useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [token, settoken] = useState("token");
  const instance = Axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      Authorization: AsyncStorage.getItem("token"),
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
    debugger;
    return result;
  };
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    settoken(token);
    // getUserInfo()
  };
  useEffect(() => {
    getToken();
    getUserInfo()
  }, []);

  const signIn = async (payload) => {
    const result = await instance
      .post("/users/login", payload)
      .then((res) => res.data);
    const { id } = result;
    console.log("signIn -> token", token);
    // set token
    await AsyncStorage.setItem(id, "token");
    instance.defaults.headers["Authorization"] = id;
    getUserInfo();
    return;
  };
  const authFunctions = {
    signIn,
    user,
  };
  return (
    <AuthContext.Provider value={authFunctions}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
