import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Carousel.css"

const Carousels = (props) => {
  return (
    <Carousel
      autoPlay
      interval={2000}
      transitionTime={1000}
      height={"100%"}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      dynamicHeight={true}
      className="caro"
    >
      <div className="overflow-hidden">
        <img
          src={
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbqw8JCtvznbPWGyEHczSPtdoDOg6QUFfsCqfWjwOxa60orp3x"
          }
          style={{
            borderRadius: "2rem",
            objectFit: "contain",
            height: "25rem",
          }}
          alt="Artist Image"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={"https://pbs.twimg.com/media/CiDPaHZWUAEL1qL.jpg"}
          style={{
            borderRadius: "2rem",
            objectFit: "contain",
            height: "25rem",
          }}
          alt="Artist Image"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5zfb6v3VISRsoAsfp9cj1djkCGZLSbAQJGYzLs3cvgiZRL2e7"
          }
          style={{
            borderRadius: "2rem",
            objectFit: "contain",
            height: "25rem",
          }}
          alt="Artist Image"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Carnatic_violinist.jpg/330px-Carnatic_violinist.jpg"
          }
          style={{
            borderRadius: "2rem",
            objectFit: "contain",
            height: "25rem",
          }}
          alt="Artist Image"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rajendra_Gangani.jpg/330px-Rajendra_Gangani.jpg"
          }
          style={{
            borderRadius: "2rem",
            objectFit: "contain",
            height: "25rem",
          }}
          alt="Artist Image"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={
            "https://bengalclassicalmusicfest.com/wp-content/uploads/2016/09/Wasem-Ahmed-Khan.jpg"
          }
          style={{
            borderRadius: "2rem",
            objectFit: "contain",
            height: "25rem",
          }}
          alt="Artist Image"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRR9E7-dSFgV7PF4GVZpYRSvFQddAZREaYaHk0NhCOkyjpVHbgr"
          }
          style={{
            borderRadius: "2rem",
            objectFit: "contain",
            height: "25rem",
          }}
          alt="Artist Image"
        />
      </div>
    </Carousel>
  );
};

export default Carousels;
