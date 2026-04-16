export function ProfileSkillSection() {
  return (
    <div>
      <h5>Skills</h5>
      <ul
        style={{ listStyle: "none", padding: 0 }}
        className="d-flex flex-column gap-2"
      >
        <li>Languages : C#, JavaScript, TypeScript, HTML, CSS</li>
        <li>
          Framework & Libraries : ASP.NET Core (API / MVC), Entity Framework
          Core, Bootstrap, React
        </li>
        <li>Database : SQL Server, PostgreSQL</li>
        <li>Tools : Git, Docker, Postman, SourceTree</li>
      </ul>
    </div>
  );
}