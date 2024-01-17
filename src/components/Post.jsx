import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";

const Post = ({ tweet }) => {
  return (
    <div className="relative flex gap-3 py-6 px-3 border-b-[1px]">
      <img className="w-12 h-12 rounded-full" src={tweet.user.photo} />
      <div className="w-full">
        {/* üst kısım kullanıcı bilgileri */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="font-bold">{tweet.user.name}</p>
            <p className="text-gray-400"> {tweet.user.name}</p>
            <p className="text-gray-400">10saatönce</p>
          </div>

          <button>|||</button>
        </div>

        {/* orta kısım tweet içeriği*/}
        <div className="my-4">
          {tweet.textContent && <p>{tweet.textContent}</p>}
          {tweet.imageContent && <img src={tweet.imageContent} />}
        </div>

        {/* alt kısım etkileşim butonları*/}
        <div className="flex justify-between">
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#00b7ff69]">
            <BiMessageRounded />
          </div>
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#00ff4436]">
            <FaRetweet />
          </div>
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#e857b3af]">
            <AiOutlineHeart />
          </div>
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#7e7e7ea8]">
            <FiShare2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
