import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Dashboard</h3>

      <nav className="nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Create Contact
        </NavLink>

        <NavLink
          to="/saved"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Saved Contacts
        </NavLink>
      </nav>
    </aside>
  );
}
