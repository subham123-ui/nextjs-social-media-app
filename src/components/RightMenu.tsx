import Ad from "./Ad";
import FriendRequests from "./FriendRequests";
import Birthdays from "./rightMenu/Birthdays";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays/>
      <Ad size="lg"/>
    </div>
  );
};

export default RightMenu;
