import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <ul>
      Sidebar
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Manager Movies</NavLink>
      </li>
    </ul>
  );
};
export default Sidebar;
