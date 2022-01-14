import { AvatarIcon } from "../../CommonUsed/AvatarIcon/AvatarIcon";

const AvatarSelector = ({ setAvatarId, avatarId }) => {
  let arr = new Array(6).fill(1).map((item, index) => (item = index + 1));
  let selectAvatarClasses = "border-2 border-sky-500 rounded-full";
  return (
    <div className="grid grid-rows-2 grid-flow-col justify-center justify-items-center gap-y-1.5 pb-4 ">
      {arr.map((item) => (
        <div key={item} onClick={() => setAvatarId(item)}>
          <AvatarIcon
            avatarId={item}
            className={
              item === avatarId
                ? selectAvatarClasses
                : "hover:border rounded-full"
            }
          />
        </div>
      ))}
    </div>
  );
};

export { AvatarSelector };
