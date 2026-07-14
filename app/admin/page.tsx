import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import CourseForm from "../../components/course/CourseForm";

export default function AdminDashboard(){

return(

<div className="flex">

<Sidebar/>

<div className="flex-1 bg-gray-100 min-h-screen">

<Topbar/>

<div className="p-10">

<CourseForm/>

</div>

</div>

</div>

)

}