"use client";

import { jsPDF } from "jspdf";

type Props = {
  fullName: string;
  course: string;
};

export default function DownloadCertificate({
  fullName,
  course,
}: Props) {
  function downloadPDF() {
    const pdf = new jsPDF("landscape");

    pdf.setFontSize(30);

    pdf.text("CERTIFICATE OF COMPLETION", 105, 35, {
      align: "center",
    });

    pdf.setFontSize(18);

    pdf.text("This certificate is awarded to", 105, 60, {
      align: "center",
    });

    pdf.setFontSize(28);

    pdf.text(fullName, 105, 85, {
      align: "center",
    });

    pdf.setFontSize(18);

    pdf.text("For successfully completing", 105, 110, {
      align: "center",
    });

    pdf.setFontSize(24);

    pdf.text(course, 105, 130, {
      align: "center",
    });

    pdf.save("Certificate.pdf");
  }

  return (
    <button
      onClick={downloadPDF}
      className="bg-green-700 text-white px-8 py-3 rounded-xl mt-8"
    >
      Download Certificate
    </button>
  );
}