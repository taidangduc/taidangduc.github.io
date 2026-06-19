import { useFileEntry } from "../hooks/useFileEntry";

export function HomeHeader() {
  const handleDownloadFile = () => {
    useFileEntry();
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <a
          href="#"
          className="h6 mb-0 cursor-pointer"
          onClick={() => handleDownloadFile()}
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
