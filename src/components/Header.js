import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <div className="bg-blue-400  text-white">
            <nav className="flex container mx-auto h-14 items-center">
                <NavLink to="/" className="pr-4">Home</NavLink>
                <NavLink to='/announcements' className={"pr-4"}>Announcements</NavLink>
                <div className="ml-auto">
                    <div>Login</div>
                </div>
            </nav>  
        </div>
    )
}