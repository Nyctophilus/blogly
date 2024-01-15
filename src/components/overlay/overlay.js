const Overlay = ({ children, close }) => {
  return (
    <>
      <div
        className="z-[1] fixed inset-0"
        style={{
          backgroundColor: "color-mix(in srgb, black 60%, transparent)",
        }}
        onClick={close}
      ></div>
      {children}
    </>
  );
};
export default Overlay;
