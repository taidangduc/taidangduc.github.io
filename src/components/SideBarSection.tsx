import { SideBarAvatar } from "./SideBarAvatar";
import { SidebarProfile } from "./SideBarProfile";

export function ProfileSideBarSection() {
  return (
    <>
      <div className="row gap-3">
        <div className="col col-md-12">
          <SideBarAvatar />
        </div>
        <div className="col col-md-12">
          <SidebarProfile />
        </div>
      </div>
    </>
  );
}
