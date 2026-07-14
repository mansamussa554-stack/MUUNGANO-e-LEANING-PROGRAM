"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function Dashboard() {

  const router = useRouter();

  const [user, setUser] = useState<{ email?: string } | null>(null);

  useEffect(()=>{

    const checkUser = async()=>{

      const {

        data:{session},

      } = await supabase.auth.getSession();

      if(!session){

        router.push("/login");

      }else{

        setUser(session.user);

      }

    };

    checkUser();

  }, [router]);

  return(

<div className="min-h-screen bg-gray-100">

<div className="bg-green-700 text-white p-5 flex justify-between">

<h1 className="text-2xl font-bold">

MUUNGANO E-LEARNING

</h1>

<button

className="bg-red-600 px-4 py-2 rounded"

onClick={async()=>{

await supabase.auth.signOut();

router.push("/login");

}}

>

Logout

</button>

</div>

<div className="p-10">

<h2 className="text-4xl font-bold">

Welcome

</h2>

<p className="mt-3">

{user?.email}

</p>

</div>

</div>

)

}