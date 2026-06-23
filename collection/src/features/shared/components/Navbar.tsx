import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/calculator"}>Calculator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
