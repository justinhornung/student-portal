import { StudentsIndex } from "./StudentsIndex";

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

  return (
    <div>
      <StudentsIndex students={students} />
    </div>
  );
}
