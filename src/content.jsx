import axios from "axios";
// import { useState, useEffect } from "react";
import { StudentsIndex } from "./StudentsIndex";
// import { StudentsNew } from "./StudentsNew";

export function Content() {
  const students = [
    {
      id: 1,
      first_name: "Bart",
      last_name: "Melon",
      email: "bart@test.com",
      phone_number: "203444444",
      short_bio: "Student at Actualize",
      linked_url: "www.bart.com",
      twitter_handle: "bart22",
      website_url: "bart.com",
      online_resume_url: "www.resume.com",
      github: "bart23",
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
