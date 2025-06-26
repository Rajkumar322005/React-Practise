import React from "react";
import User from "./User";

const users = [
  {
    name: "Rajesh Kumar",
    city: "Coimbatore",
    description: "Front-End Developer",
    skills: [
      "UI/UX",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "Front-End Developer",
    ],
    online: true,
    profile: "Images/image1.png",
  },
  {
    name: "Anjali Sharma",
    city: "Chennai",
    description: "Full-Stack Developer",
    skills: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "Git"],
    online: false,
    profile: "Images/image2.png",
  },
  {
    name: "Vignesh R",
    city: "Bangalore",
    description: "UI/UX Designer",
    skills: [
      "Figma",
      "Sketch",
      "Photoshop",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    online: true,
    profile: "Images/image3.png",
  },
  {
    name: "Sowmya Devi",
    city: "Madurai",
    description: "Back-End Developer",
    skills: ["Node.js", "Express", "SQL", "REST APIs", "Docker", "AWS"],
    online: false,
    profile: "Images/image4.png",
  },
];

const UserCart = () => {
  return (
    <>
      {users.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
};

export default UserCart;
