import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card.jsx";

const StudentStoriesSection = () => {
  const students = [
    {
      name: "Ravi Kumar",
      journey: "From Brick Kilns to Biology Labs",
      description:
"You can truly see a child blossom when given the right environment. After joining Gurukulam, he discovered a deep love for science. Surrounded by mentorship and world-class teachers who feel more like friends, he will become the next Einstein or Newton from India.",      image: "/images/khusiyan/khusiyan13.webp",
      alt: "Ravi Kumar working in the science lab at Gurukulam School",
    },
    {
      name: "Meena Sharma",
      journey: "A Dancer's Dream Reignited",
      description:
        "Meena had given up on dance due to various reasons. At Gurukulam, she met mentors and got access to a beautiful environment where she can express herself in form of dance and art. With all her hardwork and beauty of expression she will surely perform at national stages and make us proud.",
      image: "images/achievements/achievementgirl.webp",
      alt: "Meena Sharma dancing at a national-level event from Gurukulam",
    },
  ];

  return (
    <section className="bg-[#F0FAF8] py-20 px-4 sm:px-6 md:px-10">
      <Helmet>
        <title>Student Stories | Gurukulam - Khushiyon Wala School</title>
        <meta
          name="description"
          content="Discover inspiring stories of transformation from Gurukulam - Khushiyon Wala School. Meet students like Ravi and Meena who broke barriers with the right support."
        />
        <meta
          name="keywords"
          content="Student Stories, Gurukulam, Free School India, NGO Kanpur, Uddeshya Sachan, Education, Real Impact, Success"
        />
        <meta property="og:title" content="Student Stories | Gurukulam" />
        <meta
          property="og:description"
          content="How students like Ravi and Meena transformed their lives with Gurukulam's ecosystem of mentorship, love, and opportunity."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://gurukulamkws.com/student-stories" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
              alt={student.alt}
              width={640}
              height={320}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;
