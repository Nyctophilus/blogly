import { deleteUser } from "@/lib/actions";
import { getUser } from "@/lib/data";
import { Typography, Avatar, Tooltip, Button } from "@/lib/export-mat-tailwind";
const noAvatarImg = "https://i.imgur.com/CEofREj.jpg";

const UserCard = async ({ full, author, admin }) => {
  const { username, email, img } = await getUser(author, true);

  return (
    <div
      className={`overflow-hidden relative flex justify-between flex-col bg-clip-border rounded-xl bg-white ${
        full && "shadow-md max-w-[30rem]"
      }`}
    >
      <div
        className={`flex ${full || admin ? "gap-6 p-6" : "gap-1"} items-center`}
      >
        <Tooltip content={username}>
          <Avatar
            src={img || noAvatarImg}
            alt="avatar"
            size={`${admin ? "xl" : full ? "xl" : "sm"}`}
            withBorder={true}
            className={`p-0.5 shadow-xl`}
          />
        </Tooltip>
        <div
          className={`flex flex-col ${
            admin ? "flex-grow gap-4 md:gap-2" : ""
          } ${!full && "-space-y-2"}`}
        >
          {!admin && (
            <Typography variant="h5" color="gray" className="capitalize">
              publisher
            </Typography>
          )}
          <Typography
            variant={admin ? "paragraph" : "h5"}
            color="black"
            className={`capitalize mt-2 ${admin && "md:text-xl font-bold"}`}
          >
            {username}
          </Typography>
          <Typography
            variant={admin ? "small" : "h6"}
            color="black"
            className={`${admin && "md:text-md"}`}
            style={{ wordBreak: "break-word" }}
          >
            {email}
          </Typography>

          {admin && (
            <form
              action={async (_) => {
                "use server";

                await deleteUser(author);
              }}
            >
              <Button
                color="red"
                size="sm"
                className="capitalize mt-4"
                type="submit"
              >
                delete
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserCard;
