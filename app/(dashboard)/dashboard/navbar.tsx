export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="font-bold text-xl">{{LOGO}}</div>
      <div className="hidden md:flex gap-4">
        <button>{{DASHBOARD}}</button>
        <button>{{LOGOUT}}</button>
      </div>
    </nav>
  );
}


