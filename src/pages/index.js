import * as React from "react"
import { Helmet } from "react-helmet"
import logo from "../images/greenland-logo.png"
import reactIcon from "../images/react-icon.png"
import osIcon from "../images/os-icon.png"
import apiIcon from "../images/api-icon.png"

// styles
const pageStyles = {
  backgroundColor: "#FFFFFF",
  color: "#232129",
  paddingBottom: 50,
  paddingTop: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  fontSize: "28px",
  marginTop: 0,
  marginBottom: 32,
  textAlign: "center",
}

const h2Styles = {
  fontSize: "18px",
}

const imgWrapperStyles = {
  marginBottom: 25,
  textAlign: "center",
}

const logoStyles = {
  width: "50%",
}

const goalImgContainerStyles = {
  paddingRight: "15px",
}

const goalImgStyles = {
  maxHeight: "100px",
  maxWidth: "100px",
}

const goalStyles = {
  display: "flex",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Greenland Co-op Winter 2023 Work Term Report</title>
      </Helmet>
      <div id="content">
        <title>Greenland Co-op Winter 2023 Work Term Report</title>

        <div style={imgWrapperStyles}>
          <img src={logo} style={logoStyles} alt="Greenland Logo" />
        </div>
        
        <h1 style={headingStyles}>Greenland Co-op Winter 2023 Work Term Report</h1>

        <h2 style={h2Styles}>Introduction</h2>

        <p>My name is Greg French and I&lsquo;m a 4th-year computer science co-op student at the University of Guelph. The following is the final report for my 4th co-op work term, highlighting my experience at Greenland over the winter of 2023, as well as giving an overview of the goals I had made at the beginning of the term and my progress in achieving them.</p>

        <h2 style={h2Styles}>About Greenland</h2>

        <p>Greenland is an engineering consulting firm based in Collingwood Ontario. The firm works in conjunction with individuals across governments, industry, and academia on many different engineering projects. The company is spread across multiple divisions, with some employees working in office and others working remotely from home. With the software team that I was apart of working entirely remote, the primary method of communication was over Microsoft Teams. Teams enables the ability to instantly message coworkers whenever something is needed, such as help with a software issue or requesting access to a company resource. It also enables the ability to hop on a call with someone if you need additional assistance in solving a problem, or need more clarification with the task at hand. Everyone is very cordial and willing to help at a moments notice.</p>

        <h2 style={h2Styles}>Job Description</h2>

        <p>As a software developer, aside from implementing bug fixes and doing the occasional code refactor, the most significant task I had throughout the term was building out the Software Monitoring and Alerts System (SMAS). This is an internal tool that monitors various aspects of Greenland’s existing EC2 instances and sends alerts to employees over email and SMS if it notices an existing issue. Some of the aspects that SMAS tracks are volume storage, CPU load, memory usage, the healthiness of endpoints, and error logs. The frontend was built from the ground up entirely in React, with the assistance of an existing dashboard template. The backend was built with Python Flask which managed the entire API for the application and was responsible for making calls to the database and sending that data back as a response to the client using JSON objects. The DBMS that is used is Postgresql, with the database schema being integrated on top of their existing database infrastructure. I also built an internal library that was installed on each instance used for SMAS that was responsible for collecting all server data and then sending that data back to the backend server to be stored in the database.</p>

        <h2 style={h2Styles}>Goals</h2>

        <p>Around the beginning of my co-op term, I made three 3 different goals that I would work to achieve throughout the term. The following are those goals:</p>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
           <p><img src={reactIcon} style={goalImgStyles} alt="React Icon" /></p>
          </div>
          <div>
            <p><strong>Further Improve on React Programming Skills -</strong> my first goal was to improve on my overall React programming skills. React over the years has become a very important part of my software engineering toolkit. As it it one of the most useful tools for building modern web and mobile applications on the frontend, it it imperative that I continue building this skillset so that I can continue to provide more and more value, and have that value compound over time years into the future.</p>
            <p>During the co-op term, one of my main tasks was building out a new SMAS platform. SMAS stands for Software Monitoring and Alerts System. This is a new system built from the ground up that enables the tracking of all the organizations existing AWS EC2 instances. The frontend for this application was built entirely in React. This meant building out components for each page, using libraries to render things like charts and modals, building out helper components to be used across page components, utilizing local state, and using both built-in as well custom hooks to achieve the different functionality that was required for each page. This experience allowed me to get more comfortable with React, building upon the skills I already had so that I can further utilize these skills well into the future.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={osIcon} style={goalImgStyles} alt="OS Icon" /></p>
          </div>
          <div>
            <p><strong>Improve on Operating Systems Knowledge -</strong> My second goal was to improve on my overall operating systems knowledge. Becoming proficient in operating systems is a very import skill for any computer scientist to have. This is because operating systems are crucial components of just about any application you build for. Whether you are building a web application, mobile application, an iOT device, or something similar, you will most certainly be building on top of an operating system, so it is very important to know how they work and how you can leverage them to solve problems in the real world.</p>
            <p>Over the co-op term, when building out the SMAS application, I also built out the internal library that was used to help gather system data from each instance and send it to backend API using REST API calls. This data was collected via system calls, data such as volume storage, CPU load, and memory usage all collected periodically via cron jobs that were scheduled to operate at different intervals for each instance on the machine. Another aspect that was important to the system was the collecting and reporting of error log data that the machine had generated whenever an error had occurred. This allowed an error alert to be sent over both email and SMS whenever an error occurred, allowing developers on the team to take action on a system failure a lot sooner, nipping problems in the bud before they snowball and become much bigger system failures. This experience allowed me to build on my fundamental operating systems, a skill i will continue to build on going into the future.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={apiIcon} style={goalImgStyles} alt="API Icon" /></p>
          </div>
          <div>
            <p><strong>Improve on API Design Skills -</strong> My third goal was to improve on my overall API design skills. Having good API design skills is a very important aspect of application building. Knowing how to design and build an API so that is clean, easy to modify, and easy to extend is an important skill to have in the past, in the present, and in the future. APIs are certainly not going away anytime soon, so the earlier you get good at building APIs, the better.</p>
            <p>The greatest example of improving my API design skills came when developing the SMAS application. For this application, I wrote the entire backend API using Python Flask. This API was developed in conjunction with the React frontend, allowing me to perfectly anticipate exactly what data was needed to be fetched from the database for each endpoint, the naming of each endpoint, and where each endpoint should be located within the API. This also included setting up routing for all routes used by the app, building out all core methods associated with each route, and building out all helper methods to be used across multiple core route methods. Building out the entire API for this application has allowed me to level up my API design skills to a place I&lsquo;m both proud of currently, as well as putting myself in a good position to continue growing into the future.</p>
          </div>
        </div>

        <h2 style={h2Styles}>Conclusions</h2>

        <p>In conclusion, over my past co-op work term I was able to grow tremendously as a developer. Working at Greenland enabled me to work day in and day out on a multitude of different technologies and platforms, and grow my skills in areas such as React, operating systems, and API design.</p>

        <h2 style={h2Styles}>Acknowledgments</h2>

        <p>I’d thank Mark Palmer for originally hiring me and giving me an opportunity to work at the organization. I&lsquo;d like to thank Trevor Boston for being a good boss and providing help and guidance whenever it was needed.</p>
      </div>
    </main>
  )
}

export default IndexPage
