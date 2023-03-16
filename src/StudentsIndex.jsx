export function StudentsIndex(props) {
  console.log(props.students);
  return (
    <div>
      <h1>All Students</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>{student.first_name}</h2>
          <h2>{student.last_name}</h2>
          <h2>{student.email}</h2>
          <h2>{student.phone_number}</h2>
          <h2>{student.short_bio}</h2>
          <h2>{student.linked_url}</h2>
          <h2>{student.twitter_handle}</h2>
          <h2>{student.website_url}</h2>
          <h2>{student.online_resume_url}</h2>
          <h2>{student.github}</h2>
          <img src={student.photo} />
        </div>
      ))}
    </div>
  );
}
