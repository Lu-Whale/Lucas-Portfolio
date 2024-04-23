import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400"
    >
      {title}
    </Link>
  );
};

export default NavLink;
