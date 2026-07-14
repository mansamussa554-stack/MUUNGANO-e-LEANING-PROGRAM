"use client";

type Props = {
  url: string;
};

export default function VideoPlayer({ url }: Props) {
  if (!url) return null;

  return (
    <div className="mt-6">
      <iframe
        src={url}
        className="w-full h-[500px] rounded-xl"
        allowFullScreen
      />
    </div>
  );
}