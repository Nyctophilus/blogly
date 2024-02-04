import { signOutGit } from "@/lib/actions";
import { ListItem, Tooltip, Avatar } from "@/lib/export-mat-tailwind";
import Link from "next/link";

const noAvatarImg = "https://i.imgur.com/CEofREj.jpg";

const SessionLinks = ({ session }) => {
  return (
    <>
      {session?.user?.isAdmin && (
        <Link href="/admin" className="text-blue-gray ml-auto">
          <ListItem className="py-2 pr-4 capitalize">admin</ListItem>
        </Link>
      )}

      {session?.user ? (
        <>
          <Tooltip
            content={session.user.name}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Avatar
              src={session.user.image || noAvatarImg}
              alt={`${session.user.name} avatar`}
              size="sm"
              className="mx-1"
            />
          </Tooltip>
          <form action={signOutGit}>
            <button type="submit" className="text-blue-gray">
              <ListItem className="py-2 px-4 capitalize">logout</ListItem>
            </button>
          </form>
        </>
      ) : (
        <Link href="/login" className="text-blue-gray">
          <ListItem className="py-2 px-4 capitalize">login</ListItem>
        </Link>
      )}
    </>
  );
};
export default SessionLinks;
