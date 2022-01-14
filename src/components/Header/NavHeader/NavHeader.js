import { NavLink } from "react-router-dom";
import { AddBox } from "../AddBox/AddBox";

const navLink = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Announcements", path: "/announcements" },
];

const NavHeader = () => {
  return (
    <nav className="hidden md:flex items-center">
      {navLink.map((nav) => (
        <NavLink
          key={nav.id}
          to={nav.path}
          className={({ isActive }) => {
            let classes = "pr-4 font-medium hover:text-sky-900 transition";
            classes += isActive ? " text-sky-900 " : "";
            return classes;
          }}
        >
          {nav.text}
        </NavLink>
      ))}
      <AddBox />
    </nav>
  );
};

export { NavHeader };
