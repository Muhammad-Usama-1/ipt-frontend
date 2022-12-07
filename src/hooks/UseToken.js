import React, { useState, useEffect } from "react";

export function useTokenHook() {
  const [token, setToken] = useState("");
  //   const [password, setPassword] = useState("");
  const [change, setChange] = useState(false);

  useEffect(() => {
    const loadSaved = async () => {
      setToken(localStorage.getItem("token"));
    };
    loadSaved();
  }, [token]);

  const saveData = async (token) => {
    setChange(!change);
    await localStorage.setItem("token", token);
  };

  const removeData = async () => {
    setChange(!change);
    await localStorage.removeItem("token");
  };

  return {
    token,
    saveData,
    removeData,
  };
}
