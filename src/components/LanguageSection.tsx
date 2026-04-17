export function ProfileLanguageSection() {
  return (
    <div>
      <h5>Languages</h5>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <div className="d-flex gap-3">
            <div className="pe-2 pb-2 flex-shrink-0" style={{ width: "100px" }}>
              Vietnamese
            </div>
            <span>Native</span>
          </div>
        </li>
        <li>
          <div className="d-flex gap-3">
            <div className="pe-2 pb-2 flex-shrink-0" style={{ width: "100px" }}>
              English
            </div>
            <span>Intermediate</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
