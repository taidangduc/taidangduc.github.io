import avatar_url from "../public/avatar_grayscale.jpg";
export function SideBarAvatar() {
  return (
    <div>
      <img
        src={avatar_url}
        alt="User Avatar"
        className="img-thumbnail border-0 rounded-0 p-0"
      />
    </div>
  );
}
