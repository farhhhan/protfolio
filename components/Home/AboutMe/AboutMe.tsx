import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "Dart", "Java", "JavaScript"]
    },
    {
      category: "Frontend Development",
      skills: ["Flutter", "HTML", "CSS", "Next.js", "React"]
    },
    {
      category: "Backend Development",
      skills: ["REST API", "Node.js"]
    },
    {
      category: "Database & Storage",
      skills: ["Firebase", "MongoDB", "Cloudinary", "AWS Amplify", "Hive", "SQLite"]
    },
    {
      category: "State Management",
      skills: ["Bloc", "Riverpod", "Provider", "GetX"]
    },
    {
      category: "Integration & APIs",
      skills: ["Google API", "Razorpay", "Gemini API", "Stripe"]
    },
    {
      category: "Architecture & Principles",
      skills: ["Domain Driven Design (DDD)", "SOLID Principles", "Data Structures"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Play Store", "App Store", "GoDaddy", "AWS Cloud", "Clerk.com", "Unity Ads", "Google Cloud", "AdMob", "Figma", "Canva", "Git/GitHub", "Postman"]
    }
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
              Hey there! I&apos;m Farhan, a passionate <span className="text-AAsecondary">Flutter</span> and{" "}
              <span className="text-AAsecondary">Next.js developer</span> who loves bringing ideas to life through
              code. My journey in software development started with a curiosity about how apps work, and that
              curiosity has evolved into a <span className="text-AAsecondary">2+ year career</span> building
              real-world solutions that people use every day.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              What excites me most is the ability to create seamless experiences across platforms. Whether it&apos;s
              crafting a beautiful, responsive mobile app with{" "}
              <span className="text-AAsecondary">Flutter</span> that runs smoothly on both iOS and Android, or
              building a lightning-fast web application with{" "}
              <span className="text-AAsecondary">Next.js</span> that delivers exceptional performance and SEO, I
              thrive on the challenge of making technology work elegantly for users.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              Throughout my career at <span className="text-AAsecondary">Growblic PVT LTD</span> and{" "}
              <span className="text-AAsecondary">MalabarSoft LLC</span>, I&apos;ve had the opportunity to work on
              diverse projects—from developing cross-platform mobile applications to building modern web solutions.
              I&apos;ve successfully published multiple apps on the{" "}
              <span className="text-AAsecondary">App Store</span> and{" "}
              <span className="text-AAsecondary">Play Store</span>, integrated monetization strategies with{" "}
              <span className="text-AAsecondary">AdMob</span>, and managed complete deployment pipelines.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              I believe in writing clean, maintainable code and staying updated with the latest technologies and best
              practices. Every project is an opportunity to learn something new and push the boundaries of what&apos;s
              possible. I&apos;m always excited to take on new challenges and collaborate with teams to build
              something amazing.
            </div>
            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-4 text-justify">
              Here are my technical skills and expertise:
            </div>
            {/* Skills Categories */}
            <div className="font-Header tracking-wide flex flex-col space-y-4">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="flex flex-col space-y-2">
                  <div className="text-AAsecondary font-semibold text-sm md:text-base">
                    {category.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-AAtertiary text-gray-300 text-xs md:text-sm rounded-md border border-AAsecondary border-opacity-20 hover:border-opacity-50 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
