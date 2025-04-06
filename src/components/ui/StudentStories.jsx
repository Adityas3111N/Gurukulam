import React from "react";
import Card from "./Card.jsx";

const StudentStoriesSection = () => {
  const students = [
    {
      name: "Ravi Kumar",
      journey: "From Brick Kilns to Biology Labs",
      description:
        "Ravi once helped his parents in a brick kiln. After joining Gurukulam, he found a love for science. With proper mentorship and world-class labs, he won the National Science Olympiad and is now preparing for IISc.",
      image: "/lab2.webp",
    },
    {
      name: "Meena Sharma",
      journey: "A Dancer's Dream Reignited",
      description:
        "Meena had given up on dance due to poverty. At Gurukulam, she met mentors and got access to a beautiful dance studio. She now performs on national stages and wants to teach rural girls to express themselves.",
      image: "/dance.webp",
    },
  ];

  return (
    <section className="bg-[#F0FAF8] py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#003D30] mb-3">
            Their Stories. Their Power.
          </h2>
          <p className="text-lg sm:text-xl text-[#4B635E] font-light max-w-2xl mx-auto">
            Real journeys of transformation. Every child has the power to rise — they just need the right ecosystem.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {students.map((student, index) => (
            <Card
              key={index}
              image={student.image}
              title={student.name}
              subtitle={student.journey}
              description={student.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;
