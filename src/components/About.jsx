import React from 'react'
import "../About.css"
const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col m-auto justify-center w-4/5 text-justify"
    >
      <h2 className="heading flex flex-col justify-center items-center">
        About Us
      </h2>
      <div className="about-content">
        <p className=" pb-14">
          With great joy and enthusiasm, we welcome our annual 17 days long
          cultural extravaganza Virasat! SPIC MACAY NIT DURGAPUR CHAPTER presents to you our
          much-awaited event!{" "}
        </p>
        <p className=" pb-14">
          {" "}
          Virasat is the event where we reconnect with Indian culture in a deep,
          enriching manner. For our audience to be absolutely bedazzled by the
          utmost heights of Indian classical art, music, and culture in its rich,
          diverse forms. Virasat is not just an event, it is a cultural
          experience.{" "}
        </p>
        <p className=" pb-14">
          {" "}
          It is time to reclaim our heritage. Our Virasat!
        </p>
      </div>
    </div>
  );
}

export default About
