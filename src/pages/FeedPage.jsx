import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Main from "../components/Main";
import Nav from "../components/Nav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../firebase/config";

const FeedPage = () => {
  const [user, setUser] = useState(null);
  //kullannıcı bilgisine abone ol
  useEffect(() => {
    //kullanıcı oturumunu izle kullanıcııyı state aktar
    const unsub = onAuthStateChanged(auth, (currUser) => setUser(currUser));
    //sayfadan ayrıldığında izlemeyi sonlandır
    return () => unsub();
  }, []);
  return (
    <div className="feed h-screen bg-black overflow-hidden">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default FeedPage;
