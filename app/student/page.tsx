import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

export default function StudentDashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Topbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-6">
            Welcome Student
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              Courses
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Quizzes
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Certificates
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}