"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Certificate from "../../components/Certificate";
import DownloadCertificate from "../../components/DownloadCertificate";

export default function CertificatePage() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    async function loadCertificate() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (!error && data) {
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

      <div className="flex justify-center mt-8">

        <DownloadCertificate
          fullName={name}
          course={course}
        />

      </div>

    </div>
  );
}