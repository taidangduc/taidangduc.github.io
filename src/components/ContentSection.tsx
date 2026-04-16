import { ProfileAboutSection } from "./AboutSection";
import { ProfileEducationSection } from "./EducationSection";
import { ProfileSkillSection } from "./SkillSection";
import { ProfileWorkSection } from "./WorkSection";

export function ProfileContentSection() {
  return (
    <div>
      <div className="d-flex flex-column gap-3">
        <ProfileAboutSection />
        <ProfileEducationSection />
        <ProfileWorkSection />
        <ProfileSkillSection />
      </div>
    </div>
  );
}
