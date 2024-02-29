import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";
import Content from "./Content";
import dharmendra from "../images/Dharmendra_chou.png";
import laxmi from "../images/laxmi-ramaswami.jpg";
import rupak from "../images/rupak-kulkarni-flute.jpg";
import sahana from "../images/sahana.png";
import sharmila from "../images/sharmila_dance.png";
import suranjana from "../images/Suranjana_sitar.png";
import dance from "../images/chou.png";
import chou from "../images/chou.png";
import flute from "../images/flute.png";
import sarangi from "../images/sarangi.png";
import sitar from "../images/sitar.png";
import start from "../images/start.jpg";
import end from "../images/end.jpg";
import Workicon from "./Workicon";
function Timeline1() {
  return (
    <>
      <div className="dummy">
        <h1 style={{ marginBlockEnd: "1em" }} className="heading">
          Events Schedule
        </h1>
      </div>
      <div className="timeline flex flex-col gap-10">
        <div className="-mt-16 bg-[#dab81d] p-2">
          <h1 className="text-3xl ">Cinema Classics</h1>
          <h1 className="text-3xl ">(1st - 3rd March)</h1>
          <h1 className="text-3xl ">6pm - 9pm</h1>
        </div>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<Workicon img_src={start} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              display: "flex",
              padding: "0.3em",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "#32a852",
              marginTop: "-2rem",
            }}
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 3px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={chou} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              about="Cinema Classics"
              image={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6ks4IOyhRIMx8DX04CyfFdH8SiUL42oODojG7mS0y9mVr2iCQ"
              }
              alt={"Cinema Classics"}
              name="The Making of Mahatma"
              date="1st March 2024"
              venue="SAC"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              about="Cinema Classics"
              image={
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS48F-rzmo1xsCwpWHy01bfqaehwMEetOIPChtQmRlkFhsrG_aY"
              }
              alt={"Cinema Classics"}
              name="Charulata"
              date="2nd March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={flute} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.5em",
            }}
          >
            <Content
              about="Cinema Classics"
              image={
                "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQo9XyakQ8WMQhGmmdlN3UTaRYyVUKWsFY0UJ39JHKZXK2bMN9o"
              }
              alt={"Cinema Classics"}
              name="Kagemusha"
              date="3rd March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<Workicon img_src={end} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.3em",
              backgroundColor: "#32a852",
              marginTop: "3rem",
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
        <div className="mt-4 bg-[#dab81d] p-2">
          <h1 className="text-3xl ">Concerts</h1>
          <h1 className="text-3xl ">(4th - 8th March)</h1>
          <h1 className="text-3xl ">6pm - 9pm</h1>
        </div>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<Workicon img_src={start} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              display: "flex",
              padding: "0.3em",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "#32a852",
              marginTop: "-2rem",
            }}
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={sarangi} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Dr. N Rajam"
              image={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbqw8JCtvznbPWGyEHczSPtdoDOg6QUFfsCqfWjwOxa60orp3x"
              }
              alt={"Dr. N Rajam"}
              about="Dr. N. Rajam is an Indian violinist who performs Hindustani classical music.Rajam received the prestigious titles of Padmashri and Padmabhushan from the Government of India. People often refer to her music as the 'Singing Violin.'"
              date="4th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={sitar} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.5em",
            }}
          >
            <Content
              name="Shri Tarapada Rajak and Troupe"
              image={"https://pbs.twimg.com/media/CiDPaHZWUAEL1qL.jpg"}
              alt={"Shri Tarapada Rajak"}
              about="Shri Tarapada Rajak and Troupe will perform Chau Dance.Chau dance, a captivating Indian tribal martial art form, is popular in the states of Odisha, Jharkhand, and West Bengal."
              date="5th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={sitar} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Ustad Shahid Parvez"
              image={
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5zfb6v3VISRsoAsfp9cj1djkCGZLSbAQJGYzLs3cvgiZRL2e7"
              }
              alt={"Ustad Shahid Parvez"}
              about="Ustad Shahid Parvez Khan (commonly known as Shahid Parvez; born 14 October 1954) is an Indian classical sitar maestro from the Imdadkhani gharana. He is a Padma Shree awardee."
              date="6th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Vidwan Lalgudi GJR Krishnan"
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Carnatic_violinist.jpg/330px-Carnatic_violinist.jpg"
              }
              alt={"Vidwan Lalgudi GJR Krishnan"}
              about="Lalgudi Gopala Jayaraman Radhakrishnan, popularly known as G. J. R. Krishnan or Lalgudi Krishnan, is a Carnatic violinist, vocalist and composer. Lalgudi Krishnan was awarded with the Sangeet Natak Akademi Award in 2015."
              date="6th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Shri Rajendra Gangani"
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rajendra_Gangani.jpg/330px-Rajendra_Gangani.jpg"
              }
              alt={"Shri Rajendra Gangani"}
              about="Rajendra Gangani is an Indian Kathak dancer known for his innovative style and technical wizardry. Gangani is one of the leading exponents of the Jaipur Gharana style of Kathak. For his contributions to the field of Kathak, Gangani received the Sangeet Natak Akademi Award in 2003 from The President of India A. P. J. Abdul Kalam."
              date="7th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={flute} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Ustad Waseem Ahmad Khan"
              image={
                "https://bengalclassicalmusicfest.com/wp-content/uploads/2016/09/Wasem-Ahmed-Khan.jpg"
              }
              alt={"Ustad Waseem Ahmad Khan"}
              about="Waseem Khan comes from the great lineage of traditional musicians of the Agra gharana. He took his initial taalim from his grandfather Ustad Ata Hussain Khan at the age of six."
              date="8th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={flute} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Pandit Hari Prasad Chourasia"
              image={
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRR9E7-dSFgV7PF4GVZpYRSvFQddAZREaYaHk0NhCOkyjpVHbgr"
              }
              alt={"Pandit Hari Prasad Chourasia"}
              about="An internationally acclaimed flautist of India, Pandit Hariprasad Chaurasia is a very popular and eminent artiste par excellence who is known for his outstanding contribution in popularizing Indian Classical Music all over the world."
              date="8th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<Workicon img_src={end} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.3em",
              backgroundColor: "#32a852",
              marginTop: "3rem",
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
        <div className="mt-4 bg-[#dab81d] p-2">
          <h1 className="text-3xl ">Intensive</h1>
          <h1 className="text-3xl ">(9th - 14th March)</h1>
        </div>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<Workicon img_src={start} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              display: "flex",
              padding: "0.3em",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "#32a852",
              marginTop: "-2rem",
            }}
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Shree Rajendra Gangani and Swati Sinha"
              image={
                "http://hobbycue.com/wp-content/uploads/job-manager-uploads/job_logo/2018/10/swati-sinha-kathak-dance-1.jpg"
              }
              alt={"Shree Rajendra Gangani and Swati Sinha"}
              about="Dance Workshop"
              date="9th March 2024 - 14th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Shree Ashish Malakar"
              image={
                "https://baromarket.in/cdn/shop/products/5_d2ee6cef-3331-4300-bd29-2da45bcd2d9f.jpg?v=1632829964"
              }
              alt={"Shree Ashish Malakar"}
              about="Art Workshop"
              date="9th March 2024 - 14th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={sitar} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Ustad Waseem Ahmad Khan"
              image={
                "https://www.darbar.org/img/Admin/artist_profile/20210616_AP_1623855051.png"
              }
              alt={"Ustad Waseem Ahmad Khan"}
              about="Vocal Workshop"
              date="9th March 2024 - 14th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Swami Tyagrajananda Saraswati"
              image={
                "https://static.sadhguru.org/d/46272/1633201736-1633201735471.jpg"
              }
              alt={"Swami Tyagrajananda Saraswati"}
              about="Yoga Workshop"
              date="10th March 2024 - 14th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Dance Intensive Performance"
              image={
                "https://media.cnn.com/api/v1/images/stellar/prod/181107132423-india-dance-promo.jpg?q=w_1600,h_901,x_0,y_0,c_fill"
              }
              alt={"Dance Intensive Performance"}
              about="Dance Workshop participants performs on the stage."
              date="14th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Art Intensive Exhibition"
              image={
                "https://www.memeraki.com/cdn/shop/files/WhatsAppImage2024-01-30at10.07.01AM_1240x.jpg?v=1706593135"
              }
              alt={"Art Intensive Exhibition"}
              about="All the arts made by the participants will be exhibited."
              date="14th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Music Intensive Performance"
              image={
                "https://www.darbar.org/img/Admin/artist_profile/20210616_AP_1623855051.png"
              }
              alt={"Music Intensive Performance"}
              // about=""
              date="15th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#000",
              border: "2px solid black",
              boxShadow:
                "0 0 2px 2px rgba(131,58,180,1),0 0 2px 4px rgba(253,29,29,1),0 0 2px 5px rgba(252,176,69,1)",
              position: "relative",
            }}
            contentArrowStyle={{ borderRight: "15px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={dance} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          >
            <Content
              name="Heritage Walk"
              image={"http://kolkatatours.in/Images/Ajodhya_Hills_pop_up.jpg"}
              alt={"Heritage Walk"}
              about="Karo Hills"
              date="17th March 2024"
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<Workicon img_src={end} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.3em",
              backgroundColor: "#32a852",
              marginTop: "3rem",
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline1;
