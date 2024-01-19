import { getUser } from "@/lib/data";
import { Typography, Avatar } from "@/lib/export-mat-tailwind";
const noAvatarImg = "https://i.imgur.com/CEofREj.jpg";

const UserCard = async ({ author }) => {
  const { username, img, email } = await getUser(author);

  return (
    <div className="overflow-hidden relative flex justify-between flex-col bg-clip-border rounded-xl bg-white shadow-md max-w-[30rem]">
      <div className="flex gap-6 p-6 items-center">
        <Avatar
          src={img || noAvatarImg}
          alt="avatar"
          withBorder={true}
          className="p-0.5 shadow-xl h-[65px] w-[65px]"
        />
        <div className="flex flex-col w-4/6">
          <Typography variant="h5" color="gray" className="capitalize">
            publisher
          </Typography>
          <Typography variant="h5" color="black" className="capitalize mt-2">
            {username}
          </Typography>
          <Typography variant="h6" color="black">
            {email}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
