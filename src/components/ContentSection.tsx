import { ProfileAboutSection } from "./AboutSection";
import { ProfileEducationSection } from "./EducationSection";
import { ProfileLanguageSection } from "./LanguageSection";
import { ProfileProjectSection } from "./ProjectSection";
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
        <ProfileProjectSection />
        <ProfileLanguageSection />
      </div>
    </div>
  );
}
