import PostDetails from "../PostDetails";
import AvatarIcon from "../PostInfoBox/AvatarIcon";

export function AvatarSelector({ setAvatarId, avatarId }) {
  let arr = new Array(6).fill(1).map((item, index) => (item = index + 1));
  let selectAvatarClasses = "border-2 border-sky-500 rounded-full";
  return (
    <div className="grid grid-rows-2 grid-flow-col justify-center justify-items-center gap-y-1.5 pb-4">
      {arr.map((item) => (
        <div key={item} onClick={() => setAvatarId(item)}>
          <AvatarIcon
            num={item}
            className={item === avatarId && selectAvatarClasses}
          />
        </div>
      ))}
    </div>
  );
}
