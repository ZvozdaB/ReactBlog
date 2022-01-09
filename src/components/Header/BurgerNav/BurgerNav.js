import { NavLink } from "react-router-dom";
import {
  setBlockScrollOff,
  setBlockScrollOn,
} from "../../../custom hooks/setBlockScreen";
import { usePopUp } from "../../../custom hooks/usePopUp";
import classes from "./BurgerNav.module.css";
const navLinks = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Announcements", path: "/announcements" },
  { id: 3, text: "Add post", path: "/addPost" },
  { id: 4, text: "Add announcements", path: "/addAnno" },
];

export default function BurgerNav() {
  let menuOpen = usePopUp();
  let burgerClasses = menuOpen.value
    ? `${classes.burger} ${classes.open}`
    : classes.burger;

  let drawerClasses = menuOpen.value
    ? "transform translate-x-0"
    : "transform translate-x-full";

  menuOpen.value ? setBlockScrollOn() : setBlockScrollOff();
  return (
    <>
      <div className={burgerClasses} onClick={menuOpen.handler}>
        <span></span>
      </div>
      <div
        className={
          `md:hidden fixed inset-0 flex justify-center flex-col bg-blue-400 z-30 transition duration-300 ` +
          drawerClasses
        }
      >
        <nav className="text-2xl text-white text-center font-medium ">
          {navLinks.map((nav) => (
            <NavLink
              to={nav.path}
              key={nav.id}
              className={({ isActive }) => {
                let classes = "block mb-10  ";
                classes += isActive ? " text-sky-900 " : "";
                return classes;
              }}
              onClick={menuOpen.handler}
            >
              {nav.text}
            </NavLink>
          ))}

          {/* <div className="rounded bg-white text-xs text-darkBlue mx-6 py-3">
            <Link href="/support">
              <a>{t("nav.support")}</a>
            </Link>
          </div> */}
        </nav>
      </div>
    </>
  );
}
