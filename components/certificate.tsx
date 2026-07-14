type Props = {
  fullName: string;
  course: string;
};

export default function Certificate({
  fullName,
  course,
}: Props) {
  return (
    <div className="max-w-5xl mx-auto bg-white border-[12px] border-green-700 p-16 rounded-xl shadow-2xl">

      <h1 className="text-5xl font-bold text-center text-green-700">

        CERTIFICATE OF COMPLETION

      </h1>

      <p className="text-center mt-10 text-xl">

        This certificate is proudly presented to

      </p>

      <h2 className="text-center text-4xl font-bold mt-6">

        {fullName}

      </h2>

      <p className="text-center mt-8 text-xl">

        For successfully completing

      </p>

      <h2 className="text-center text-3xl font-bold mt-5">

        {course}

      </h2>

      <div className="flex justify-between mt-24">

        <div>

          ___________________

          <br />

          Instructor

        </div>

        <div>

          ___________________

          <br />

          Director

        </div>

      </div>

    </div>
  );
}