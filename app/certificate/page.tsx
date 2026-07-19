"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Certificate from "../../components/Certificate";

export default function CertificatePage() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    async function loadCertificate() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("certificates")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (data) {
        setName(data.full_name);
        setCourse(data.course_title);
      }
    }

    loadCertificate();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Certificate
        fullName={name}
        course={course}
      />
    </div>
  );
}