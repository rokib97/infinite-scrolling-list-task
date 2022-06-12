import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebse.init";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div class="navbar bg-base-100 shadow-lg lg:px-12">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          Infinite Scrolling
        </Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          {user ? (
            <li>
              <NavLink onClick={logOut} to="/login">
                LogOut
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
