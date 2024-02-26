import './App.css'

function Experience() {
  return (
    <>
      <hr />
      <h2>Experience</h2>
      <h3>Sigma School (2023 - 2024)</h3>
      <ul>
        <li>Currently enrolled in Sigma School, a collaborative co-learning
          coding school renowned for its emphasis on real world
          projects and collaborative learning.</li>
        <li>Acquiring expertise in four core modules: Coding
          Fundamentals, Frontend Development, Backend
          Development, and Mobile App Development.</li>
        <li>Building a solid foundation in coding principles and
          techniques to excel in the software development industry.</li>
      </ul>
      <h3>Jabatan Kerja Raya (JKR) Malaysia (2022)</h3>
      <ul>
        <li>Demonstrated strong organizational skills by effectively
          managing on-site record diary.</li>
        <li>Provided supervision and oversight of on-site activities,
          ensuring timely completion and monitoring job progress.</li>
        <li>Played a key role in maintaining a compliant and audit ready
          site environment.</li>
        <li>Participated in meetings on a proactive basis.</li>
      </ul>
      <h3>Pembinaan Kubang Palas Sdn. Bhd. (2021)</h3>
      <ul>
        <li>Provided a strong understanding of how to read and
          analyze drawing plans, as well as efficiently highlighting
          important information to workers.</li>
        <li>Supervised on-site activities, ensuring adherence to
          project timelines and closely monitoring job progress.</li>
        <li>Maintained a close attention on detail to mitigate errors
          and prevent safety lapses.</li>
        <li>Demonstrated strong record-keeping skills, effectively
          managing on-site documentation and ensuring accurate
          and organized records.</li>
      </ul>
    </>
  )
}

function Education() {
  return (
    <>
      <hr />
      <h2>Education</h2>
      <h3>Universiti Teknologi Malaysia (UTM) (2018 - 2022)</h3>
      <ul>
        <h3>Bachelor of Civil Engineering</h3>
        <li>Final Year Project: Predict soil erosion at Port Dickson by
          using USLE with a Geographic Information System</li>
      </ul>
      <h3>Universiti Teknologi Mara (UiTM) (2017 - 2018)</h3>
      <ul>
        <h3>Foundation in Engineering</h3>
      </ul>
    </>
  )
}

function Skills() {
  return (
    <>
        <hr />
        <h2>Skills & Interests</h2>
        <p><b>Skills:</b> AutoCAD, REVIT, VS Code, HTML, CSS, JavaScript, React</p>
        <p><b>Interests:</b> Reading webnovel & webtoon, Hiking, Gaming</p>
    </>
  )
}

export default function App() {
  return (
    <>
      <header>
        <h1>Nik Muhammad Afiq</h1>
        <h2>Aspiring Software Developer</h2>
        <p>Malaysia | <a href="https://www.linkedin.com/in/nik-muhammad-afiq/" target="_blank" rel="noreferrer noopener">LinkedIn</a> | <a
        href="mailto:afiqharipin@gmail.com">afiqharipin@gmail.com</a> |</p>
      </header>

      <main>
        <Experience/>
        <Education/>
        <Skills/>
      </main>
    </>
  )
}
