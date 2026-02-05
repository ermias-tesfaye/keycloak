import Keycloak from "keycloak-js";
import { useEffect, useRef, useState } from "react";
import data from "../utils/data";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isRun = useRef(false);
  const keycloakRef = useRef(null);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const client = new Keycloak({
      url: data.url,
      realm: data.realm,
      clientId: data.client
    });

    keycloakRef.current = client;

    client.init({ onLoad: "login-required" })
      .then(res => setIsLogin(res));
  }, []);

  const logout = () => {
    keycloakRef.current?.logout({
      redirectUri: window.location.origin
    });
  };

  return [isLogin, logout];
};

export default useAuth;
