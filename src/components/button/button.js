import { Button } from "@/lib/export-mat-tailwind";

const MyButton = ({ children, classes }) => (
  <Button
    className={`capitalize font-black text-xl lg:text-3xl tracking-wide hover:invert drop-shadow-xl ${classes}`}
  >
    {children}
  </Button>
);

export default MyButton;
