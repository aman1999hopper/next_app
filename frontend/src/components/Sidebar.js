"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Transactions", path: "/transactions" },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#121417] text-white p-5">
      <h1 className="text-xl font-bold mb-5">Dashboard</h1>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`mb-3 p-2 rounded ${
              pathname === item.path ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
