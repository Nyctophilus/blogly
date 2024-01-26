import { getUsers } from "@/lib/data";
import UserCard from "../userCard/userCard";

const UsersList = async () => {
  const allUsers = await getUsers();

  return (
    <>
      {allUsers.map((user) => (
        <UserCard
          key={user._id.toString()}
          author={user._id.toString()}
          admin
        />
      ))}
    </>
  );
};
export default UsersList;
