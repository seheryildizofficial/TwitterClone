import { useEffect } from "react";
import Form from "./Form";
import Spinner from "./Spinner";
import { collection, onSnapshot } from "firebase/firestore";
import Post from "../components/Post";
const Main = ({ user }) => {
  const [tweets, setTweets] = useState(null);
  const tweetsCol = collection(db, "tweets");

  //tweet kolleksiyonundaki verileri anlık olarak al
  useEffect(() => {
    const unsub = onSnapshot(tweetsCol, (snapshot) => {
      //geçici dizi
      const tempTweets = [];
      snapshot.forEach((doc) => {
        tempTweets.push({ id: doc.id, ...doc.data() });
      });
      //veriyi state aktar
      setTweets(tempTweets);
    });
    return () => unsub();
  }, []);

  return (
    <main className="border border-gray-700 overflow-y-auto">
      <header className="font-bold p-4 border-b-[1px] border-gray-700">
        Anasayfa
      </header>
      <Form user={user} />

      {!tweets ? (
        <Spinner style={"w-6 h-6 mx-auto my-10"} />
      ) : (
        tweets.map((tweet) => <Post key={tweet.id} tweet={tweet} />)
      )}
    </main>
  );
};

export default Main;
