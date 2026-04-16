export function SidebarProfile() {
  return (
    <div>
      <div>
        <h4 className="mb-0 d-inline-block border-2 border-bottom border-dark pb-1 mb-1">
          TAI DANG
        </h4>
      </div>
      <ul style={{ listStyle: "none", padding: 0, fontWeight: 500 }}>
        <li>DANG DUC TAI</li>
        <li>2003.01.15/23 yo</li>
        <li>0818.141.658</li>
        <li>
          <a
            href="https://www.linkedin.com/in/taidangduc/"
            className="text-decoration-none text-dark"
          >
            in/taidangduc
          </a>
        </li>
        <li>
          <a
            href="https://github.com/taidangduc"
            className="text-decoration-none text-dark"
          >
            github/taidangduc
          </a>
        </li>
      </ul>
    </div>
  );
}
