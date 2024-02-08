import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";

const Header = () => {
  return (
    <div>
      <div className="bg-blue-700 flex p-7 justify-around  ">
        <h1 className="text-3xl text-white font-bold">React Components</h1>
        <ul className="flex gap-5 text-white font-semibold">
          <Link to={"/"}>
            <li>Button</li>
          </Link>

          <Link to={"/cards"}>
            {" "}
            <li>Cards</li>
          </Link>

          <Link to={"/alert"}>
            {" "}
            <li>Alert</li>
          </Link>
        </ul>
      </div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Header;
