import Ad from "./Ad";
import FriendRequests from "./FriendRequests";
import Birthdays from "./rightMenu/Birthdays";
import UserInfoCard from "./UserInfoCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <UserInfoCard userId=""/>
      <FriendRequests />
      <Birthdays/>
      <Ad size="lg"/>
    </div>
  );
};

export default RightMenu;
