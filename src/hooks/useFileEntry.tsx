import resume_url from "../public/resume.pdf";

export function useFileEntry() {
  if (!resume_url) {
    alert("File location is not provided");
    return;
  }

  const comfirmed = window.confirm("Do you want to download the resume?");

  if (!comfirmed) return;

  try {
    const anchorElement = document.createElement("a");

    anchorElement.href = resume_url;
    anchorElement.download = "resume.pdf";
    anchorElement.style.display = "none";

    document.body.appendChild(anchorElement);
    anchorElement.click();

    document.body.removeChild(anchorElement);
  } catch {
    alert("Failed to download the resume");
  }
}
