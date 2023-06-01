import LogoComponent from "../../assets/logo/logo";
import { useGetBookSearch } from "../../hooks/useGetBookSearch";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";
import useDebounce from "../../hooks/useDebounce";

const Navbar = () => {
  const { search, setSearch } = useGlobalContext();
  const debouncedValue = useDebounce<string>(search, 1250);
  useGetBookSearch(debouncedValue);

  return (
    <div className="bg-white w-full py-4 shadow-md p-2 items-center">
      <div className="container flex">
        <div className="w-1/3 md:w-1/2">
          <Link to="/">
            <LogoComponent fill="#000" />
          </Link>
        </div>
        <div className="w-2/3 md:w-1/2">
          <label
            htmlFor="search"
            className="block text-sm font-medium leading-6 text-gray-900 sr-only"
          >
            Search by title, author, ISBN & topic
          </label>

          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  text-sm  text-left font-light bg-gray-200 focus:bg-white transition-colors duration-300"
            placeholder="Search by title"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
