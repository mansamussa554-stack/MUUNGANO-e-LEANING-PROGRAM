"use client";

type Props = {
  url: string;
};

export default function PDFViewer({ url }: Props) {
  if (!url) return null;

  return (
    <iframe
      src={url}
      className="w-full h-[700px] rounded-xl mt-6"
    />
  );
}