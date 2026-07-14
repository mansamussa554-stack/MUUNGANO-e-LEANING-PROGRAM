export default function Features() {
  const features = [
    {
      title: "Learning Modules",
      description: "Structured learning from beginner to advanced."
    },
    {
      title: "Educational Videos",
      description: "Watch official learning videos."
    },
    {
      title: "Interactive Quizzes",
      description: "Assess your knowledge after each module."
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning progress."
    },
    {
      title: "Certificates",
      description: "Earn digital certificates after completion."
    },
    {
      title: "Union History",
      description: "Explore the history of Tanganyika and Zanzibar."
    }
  ];

  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-green-700">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}