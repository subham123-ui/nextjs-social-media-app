import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className=" flex gap-8 w-max">
        {/* STORIES */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-cup-of-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">GOGO</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-cup-of-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">GOGO</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-cup-of-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">GOGO</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-cup-of-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">GOGO</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-cup-of-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">GOGO</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-cup-of-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">GOGO</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
