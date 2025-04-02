import "../../styles/meteor.scss";

export default function Sky() {
  return (
    <>
      <div className="star z-10">
        <img
          src="/assets/planet.svg"
          alt=""
          className="absolute h-250 w-auto right-0 xs:-right-70 md:-right-100 -bottom-130 sm:-bottom-100 mx-auto"
        />
      </div>
    </>
  );
}
