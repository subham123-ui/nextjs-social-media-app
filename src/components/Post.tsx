import Image from "next/image";
import Comments from "./feed/Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            alt=""
            src="https://images.pexels.com/photos/24425289/pexels-photo-24425289/free-photo-of-a-cake-with-fruit-and-a-plate-of-food.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">John Wick</span>
        </div>
        <Image src="/more.png" alt="" width={20} height={20} className="" />
      </div>
      {/* DESC */}
      <div className="flex  flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            alt=""
            src="https://images.pexels.com/photos/17499608/pexels-photo-17499608/free-photo-of-view-of-the-castle-on-bled-island-on-lake-bled-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            className="object-cover rounded-md "
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi labore
          eos a consequatur non et itaque, beatae dolorum saepe voluptatem
          obcaecati facilis illo veniam consectetur similique illum ipsa
          officiis eius.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">1,234 <span  className="hidden md:inline">Likes</span></span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">234 <span  className="hidden md:inline">Comments</span></span>
          </div>
        </div>
        <div className="">
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">234 <span  className="hidden md:inline">Shares</span></span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;
