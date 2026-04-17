export function ProfileProjectSection() {
  return (
    <div>
      <h5>Projects</h5>
      <ul
        style={{ listStyle: "none", padding: 0 }}
        className="d-flex flex-column gap-2"
      >
        <li>
          <a href="https://github.com/taidangduc/eshop" className="text-dark">EShop</a>
          <div>
            <span>
              A full-stack e-commerce application focused on product management
              and checkout workflows.
            </span>
            <br />
            <span>
              Tech Stack: C#, .NET 9, JavaScript, React 19 (Vite), PostgreSQL,
              MediatR.
            </span>
          </div>
          <ul style={{ listStyle: "initial" }}>
            <li>Built with ASP.NET Core using Clean Architecture and CQRS patterns.</li>
            <li>
              Developed RESTful APIs for product, variant, and checkout
              workflows.
            </li>
            <li>
              Designed a variant system for managing product options and
              inventory.
            </li>
            <li>
              Integrated Stripe Checkout and handled webhooks for payment
              processing.
            </li>
            <li>
              Implemented authentication using JWT and cookie-based sessions.
            </li>
            <li>
              Built the frontend using React (Vite), JavaScript, React Hooks,
              React Query.
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/taidangduc/object-storage" className="text-dark">Object Storage</a>
          <div>
            <span>
              An image storage and processing system for uploading, storing, and
              resizing images.
            </span>
            <br />
            <span>
              Tech Stack: C#, .NET 9, TypeScript, React 19 (Vite), SQL Server,
              Chakra UI, ImageSharp, Azure.
            </span>
          </div>
          <ul style={{ listStyle: "initial" }}>
            <li>Built with ASP.NET Core using Clean Architecture.</li>
            <li>
              Developed RESTful APIs for handling image processing and storage,
              and metadata management.
            </li>
            <li>
              Implemented asynchronous image processing (resizing, compression) using
              Azure Functions and ImageSharp.
            </li>
            <li>
              Integrated Azure Blob Storage and Azure Queue Storage for scalable
              storage and background processing.
            </li>
            <li>
              Built the frontend UI using React (Vite), TypeScript, React Hooks
              and Chakra UI.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
