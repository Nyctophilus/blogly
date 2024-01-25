import { getSession } from "@/lib/actions";
import { Typography, Avatar, Tooltip } from "@/lib/export-mat-tailwind";
const noAvatarImg = "https://i.imgur.com/CEofREj.jpg";

const UserCard = async ({ full }) => {
  const {
    user: { name, img, email },
  } = await getSession();

  return (
    <div
      className={`overflow-hidden relative flex justify-between flex-col bg-clip-border rounded-xl bg-white ${
        full && "shadow-md max-w-[30rem]"
      }`}
    >
      <div className={`flex ${full ? "gap-6 p-6" : "gap-1"} items-center`}>
        <Tooltip content={name}>
          <Avatar
            src={img || noAvatarImg}
            alt="avatar"
            size={`${full ? "xl" : "sm"}`}
            withBorder={true}
            className={`p-0.5 shadow-xl`}
          />
        </Tooltip>
        <div className={`flex flex-col w-4/6 ${!full && "-space-y-2"}`}>
          <Typography variant="h5" color="gray" className="capitalize">
            publisher
          </Typography>
          <Typography variant="h5" color="black" className="capitalize mt-2">
            {name}
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
