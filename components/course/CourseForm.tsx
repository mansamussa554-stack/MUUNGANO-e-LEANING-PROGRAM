"use client";

import { useState } from "react";
import { addCourse } from "../../lib/course";

export default function CourseForm() {

const [title,setTitle]=useState("");

const [description,setDescription]=useState("");

const [category,setCategory]=useState("");

const submit=async()=>{

await addCourse({

title,

description,

category

})

alert("Course Added")

setTitle("")

setDescription("")

setCategory("")

}

return(

<div className="bg-white p-8 rounded-xl shadow">

<h2 className="text-2xl font-bold mb-6">

Add New Course

</h2>

<input

placeholder="Course Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="border p-3 rounded w-full mb-4"

/>

<textarea

placeholder="Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

className="border p-3 rounded w-full mb-4"

/>

<input

placeholder="Category"

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="border p-3 rounded w-full mb-4"

/>

<button

onClick={submit}

className="bg-green-700 text-white px-6 py-3 rounded">

Save Course

</button>

</div>

)

}