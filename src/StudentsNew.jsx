export function StudentsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateStudent(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" />
        </div>
        <div>
          Email Address: <input name="email" type="text" />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" />
        </div>
        <div>
          Bio: <input name="short_bio" type="text" />
        </div>
        <div>
          LinkedIn: <input name="linked_url" type="text" />
        </div>
        <div>
          Twitter: <input name="twitter_handle" type="text" />
        </div>
        <div>
          Website: <input name="website_url" type="text" />
        </div>
        <div>
          Resume: <input name="online_resume_url" type="text" />
        </div>
        <div>
          GitHub: <input name="github" type="text" />
        </div>
        <div>
          Photo: <input name="photo" type="text" />
        </div>
      </form>
    </div>
  );
}
