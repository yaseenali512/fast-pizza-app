import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
