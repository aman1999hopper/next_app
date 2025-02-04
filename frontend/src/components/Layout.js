import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-[#121417] min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 p-10">{children}</div>
    </div>
  );
};

export default Layout;
