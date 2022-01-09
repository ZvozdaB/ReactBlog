import NavHeader from "./NavHeader/NavHeader";
import AuthBox from "./AuthBox/AuthBox";
import BurgerNav from "./BurgerNav/BurgerNav";

export default function Header() {
  return (
    <header className="bg-blue-400 shadow-md text-white relative">
      <div className="flex wrapper h-14 items-center justify-end md:justify-between relative">
        <BurgerNav />
        <NavHeader />
        <AuthBox />
      </div>
    </header>
  );
}
