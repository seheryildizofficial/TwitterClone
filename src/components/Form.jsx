import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { BsCardImage } from "react-icons/bs";
import { db } from "../firebase/config";
const Form = ({ user }) => {
  //tweet kolleksiyonun referansını al
  const tweetsCol = collection(db, "tweet");
  //formun gönderilmesi
  const handleSubmit = async (e) => {
    e.preventDefault();
    //inputtaki verilere eriş
    const textContent = e.target[0].value;
    const imageContent = e.target[1].file[0];

    //tweet kolleksiyonuna yeni döküman ekle
    await addDoc(tweetsCol, {
      textContent,
      imageContent: null,
      createdAt: serverTimestamp(),
      user: { id: user.uid, name: user.displayName, photo: user.photoURL },
      likes: [],
      isEdited: false,
    });
    //console.log(e.target,imageContent)
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 p-4 border-b-[1px] border-gray-700"
    >
      <img
        className="rounded-full h-[35px] md:h-[45px] mt-1"
        src={user?.photoURL}
        alt="profile"
      />

      <div className="w-full">
        <input
          type="text"
          className="w-full bg-transparent my-2 outline-none md:text-lg"
          placeholder="Neler oluyor?"
        />

        <div className="flex justify-between items-center">
          <label
            htmlFor="image-input"
            className="hover:bg-gray-800 text-lg transition p-4 cursor-pointer rounded-full"
          >
            <BsCardImage />
          </label>

          <input className="hidden" id="image-input" type="file" />

          <button className="bg-blue-600 flex items-center justify-center px-4 py-2 min-w-[85px] min-h-[40px] rounded-full transition hover:bg-blue-800">
            Tweetle
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
