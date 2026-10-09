import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navbar() {
  const links = [
    { name: "الرئيسية", to: "/" },
    { name: "المدونة", to: "/blog" },
    { name: "من نحن", to: "/about" },
  ];

  return (
    <>
      <nav className="bg-gray-500 text-white sticky top-0 z-50">
        <div className="container flex justify-between items-center px-10 py-5">
          <div className="logo flex gap-3 items-center ">
            <img src={logo} alt="" className="w-16" />

            <div className="logo-info">
              <h1>عدسة</h1>
              <p>عالم التصوير الفوتوغرافي</p>
            </div>
          </div>

          <div className="links">
            <ul className="flex gap-2.5 items-center border border-gray-100 p-3 rounded-4xl">
              {links.map((link) => (
                <NavLink to={link.to}
                  className={({ isActive }) =>
                    `rounded-3xl p-2   ${isActive ? "bg-orange-400 text-white" : "text-gray-200"}`
                  }
                >
                  <li> {link.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>

          <div className="actions">
            <button>ابدأ القراءة</button>
          </div>
        </div>
      </nav>
    </>
  );
}
