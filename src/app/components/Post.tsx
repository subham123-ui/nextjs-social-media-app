import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/17685561/pexels-photo-17685561/free-photo-of-a-surfer-is-in-the-ocean-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">John Wick</span>
        </div>
        <Image src="/more.png" alt="" width={20} height={20} className="" />
      </div>
      {/* DESC */}
      <div className=""></div>
      {/* INTERACTION */}
      <div className=""></div>
    </div>
  );
};

export default Post;
