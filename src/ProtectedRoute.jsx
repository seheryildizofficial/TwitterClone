import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "./firebase/config";

const ProtectedRoute = () => {
  //kullanıcının yetkisi var mı
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    //anlık olarak kullanıcının oturumunu izle değişimde state i gğncelle
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
    //kullanıcı sayfadan ayrılırsa izleyiciyi kaldır
    return () => unsub();
  }, []);

  //eğer yetkisi yoksa
  if (isAuth === false) return <Navigate to={"/"} />;

  //yetkisi varsa
  return <Outlet />;
};

export default ProtectedRoute;
