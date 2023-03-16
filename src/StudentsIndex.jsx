export function StudentsIndex(props) {
  console.log(props.students);
  return (
    <div>
      <h1>All Students</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>First name: {student.first_name}</h2>
          <h2>Last name: {student.last_name}</h2>
          <h3>Email: {student.email}</h3>
          <h3>Phone: {student.phone_number}</h3>
          <h3>Bio:</h3>
          <p>{student.short_bio}</p>
          <h2>LinkedIn: {student.linked_url}</h2>
          <h2>Twitter: {student.twitter_handle}</h2>
          <h2>Website: {student.website_url}</h2>
          <h2>Resume: {student.online_resume_url}</h2>
          <h2>GitHub: {student.github}</h2>
          <img src={student.photo} />
        </div>
      ))}
    </div>
  );
}
