import { getUser } from "@/lib/data";
import { Typography, Avatar } from "@/lib/export-mat-tailwind";
const noAvatarImg = "https://i.imgur.com/CEofREj.jpg";

const UserTag = async ({ author }) => {
  const user = await getUser(author, true);

  return (
    <span>
      <Typography variant="small" className="text-gray-400 font-medium">
        {user.username || user.name}
      </Typography>
      <Avatar
        size="sm"
        variant="circular"
        alt="tania andrew"
        className="border-2 border-white"
        src={user.img || noAvatarImg}
      />
    </span>
  );
};
export default UserTag;
