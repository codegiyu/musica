import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="hidden">
        <ul className="flex justify-end gap-8 py-4 px-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view-chart">View Chart</Link>
          </li>
          <li>
            <Link to="/all-components">All Components</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;