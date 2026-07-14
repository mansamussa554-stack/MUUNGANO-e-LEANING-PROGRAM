export default function Topbar() {
  return (
    <header className="bg-white shadow p-5 flex justify-between items-center">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <button className="bg-red-600 text-white px-5 py-2 rounded-lg">
        Logout
      </button>

    </header>
  );
}