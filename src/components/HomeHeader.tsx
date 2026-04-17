import { useFileEntry } from "../hooks/useFileEntry";

export function HomeHeader() {
  const handleDownloadResume = () => {
    useFileEntry();
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <a
          href="#"
          className="h6 mb-0 cursor-pointer"
          onClick={() => handleDownloadResume()}
        >
          RESUME
        </a>
        <a
          href="mailto: taidangduc1503@gmail.com"
          className="text-decoration-none"
        >
          Contact
        </a>
      </div>
    </>
  );
}
