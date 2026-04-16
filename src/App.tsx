import { ProfileContentSection } from "./components/ContentSection";
import { HomeHeader } from "./components/HomeHeader";
import { ProfileSideBarSection } from "./components/SideBarSection";

function App() {
  return (
    <>
      <div className="container py-4 position-relative">
        <div className="row gap-4">
          <HomeHeader />
          <div className="col-12 col-md-3 col-lg-2">
            <div className="position-sticky" style={{ top: "10px" }}>
              <ProfileSideBarSection />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-7">
            <ProfileContentSection />
          </div>
          <div className="d-none d-lg-block col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
