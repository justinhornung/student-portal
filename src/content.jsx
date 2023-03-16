import axios from "axios";
// import { useState, useEffect } from "react";
import { StudentsIndex } from "./StudentsIndex";
// import { StudentsNew } from "./StudentsNew";

export function Content() {
  const students = [
    {
      id: 1,
      first_name: "Lisa",
      last_name: "Daigle",
      email: "lisa@test.com",
      phone_number: "2037293214",
      short_bio: "Student at Actualize",
      linked_url: "www.lisadaigle.com",
      twitter_handle: "lisad23",
      website_url: "lisad.com",
      online_resume_url: "www.resume.com",
      github: "lisad23",
      photo: "jpg",
    },

    {
      id: 2,
      first_name: "Makr",
      last_name: "Mattson",
      email: "mark@test.com",
      phone_number: "20333333",
      short_bio: "Student at Actualize",
      linked_url: "www.mark.com",
      twitter_handle: "markks",
      personal_blog_url: "markw.com",
      online_resume_url: "www.resume2.com",
      github: "makrs",
      photo: "jpg",
    },
  ];

  // export function Content() {
  //   const [students, setStudents] = useState([]);

  //   const handleIndexStudents = () => {
  //     console.log("handleIndexStudents");
  //     axios.get("http://localhost:3000/students.json").then((response) => {
  //       console.log(response.data);
  //       setStudents(response.data);
  //     });
  //   };

  //   useEffect(handleIndexPstudents, []);

  // const handleCreateStudent = (params, successCallback) => {
  //   console.log("handleCreateStudent", params);
  //   axios.post("/students.json", params).then((response) => {
  //     setStudents([...students, response.data]);
  //     successCallback();
  //   });
  // };

  return (
    <div>
      {/* <StudentsNew onCreateStudent={handleCreateStudent} /> */}
      <StudentsIndex students={students} />
    </div>
  );
}
