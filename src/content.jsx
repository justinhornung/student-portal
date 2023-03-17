import axios from "axios";
import { useState, useEffect } from "react";
import { StudentsIndex } from "./StudentsIndex";
import { StudentsNew } from "./StudentsNew";

export function Content() {
  const [students, setStudents] = useState([]);

  const handleIndexStudents = () => {
    console.log("handleIndexStudents");
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  useEffect(handleIndexStudents, []);

  const handleCreateStudent = (params, successCallback) => {
    console.log("handleCreateStudent", params);
    axios.post("/students.json", params).then((response) => {
      setStudents([...students, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <StudentsNew onCreateStudent={handleCreateStudent} />
      <StudentsIndex students={students} />
    </div>
  );
}
