import Image from "next/image";


function Header(){
  return (
  
    <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
      <img src="img/profolio-600x600.png" alt="" className="img-fluid rounded-circle" />
    </div>

    <a href="index.html" className="logo d-flex align-items-center justify-content-center">
      
      <h1 className="sitename">Yokeshwaran K</h1>
    </a>

    <div className="social-links text-center">
      <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
      <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>

  </header>
 
  );
}

export default function Home() {
  return (
   
    <>
       <Header />
       <main className="main">
       <section id="hero" className="hero section dark-background">
      {/* Optimized Image */}
      <Image 
        src="/img/home-hero-bg.jpg" 
        alt="Hero Background" 
        layout="fill" 
        objectFit="cover"
        data-aos="fade-in" 
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Yokeshwaran K</h2>
        <p>
          I'm PHP Web Developer
          {/*<Typed
            strings={["Designer", "Developer", "Freelancer", "Photographer"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />*/}
        </p>
      </div>
    </section>

    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          PHP Web Developer with 5 years of experience building and maintaining websites for UK-based property clients,
          now expanding into Python and Django development.
        </p>
      </div>

      {/* About Content */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          {/* Profile Image */}
          <div className="col-lg-4">
            <Image
              src="/img/portfolio-img.png"
              width={400}
              height={400}
              className="about-profileImg"
              alt="Profile Image"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-8 content">
            <h2>PHP &amp; Python Web Developer.</h2>
            <p className="fst-italic py-3">
              I build and maintain web applications end-to-end — from back-end logic and database design to
              responsive, client-ready front ends.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Role:</strong> <span>PHP Web Developer</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Experience:</strong> <span>5 Years</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <a href="tel:9345542901">9345542901</a></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chennai, India</span></li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>GitHub:</strong> <a href="https://github.com/Yokeshwaran-k/" target="_blank">github.com/Yokeshwaran-k</a></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>MCA</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <a href="mailto:yokeshwaranyoki001@example.com">yokeshwaranyoki001@example.com</a></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Status:</strong> <span>Open to New Roles</span></li>
                </ul>
              </div>
            </div>

            <p className="py-3">
              Over the past 5 years, I've designed, built, and maintained 10–25 property and real estate websites for
              UK-based clients — handling everything from custom PHP back-end development and MySQL database design
              to WordPress customization and responsive front ends with Bootstrap and AJAX. Beyond development, I own
              the post-launch side too: site maintenance, bug fixes, hosting, and technical SEO tasks like Google
              Analytics tagging and Search Console submissions. I'm currently expanding into Python and Django,
              building hands-on projects like a face recognition-based attendance system, as I work toward a broader
              full-stack skill set.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="stats" className="stats section">
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row gy-4">
      <div className="col-lg-3 col-md-6">
        <div className="stats-item">
          <i className="bi bi-emoji-smile"></i>
          <span className="purecounter" data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1">
            232
          </span>
          <p>
            <strong>Happy Clients</strong> <span>consequuntur quae</span>
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stats-item">
          <i className="bi bi-journal-richtext"></i>
          <span className="purecounter" data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1">
            521
          </span>
          <p>
            <strong>Projects</strong> <span>adipisci atque cum quia aut</span>
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stats-item">
          <i className="bi bi-headset"></i>
          <span className="purecounter" data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1">
            1453
          </span>
          <p>
            <strong>Hours Of Support</strong> <span>aut commodi quaerat</span>
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="stats-item">
          <i className="bi bi-people"></i>
          <span className="purecounter" data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1">
            32
          </span>
          <p>
            <strong>Hard Workers</strong> <span>rerum asperiores dolor</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="skills" className="skills section light-background">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Skills</h2>
    <p>My core stack and the technologies I use to build and maintain web applications, from front-end to back-end.</p>
  </div>

  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row skills-content skills-animation">
      <div className="col-lg-6">
        <div className="progress">
          <span className="skill">
            <span>HTML</span> <i className="val">100%</i>
          </span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar"  style={{ width: "100%" }}></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            <span>CSS</span> <i className="val">90%</i>
          </span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            <span>JavaScript</span> <i className="val">75%</i>
          </span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="progress">
          <span className="skill">
            <span>PHP</span> <i className="val">80%</i>
          </span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            <span>WordPress/CMS</span> <i className="val">90%</i>
          </span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            <span>Bootstrap</span> <i className="val">80%</i>
          </span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">
            <span>Python / Django</span> <i className="val">60%</i>
          </span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="resume" className="resume section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Resume</h2>
    <p>
     My professional experience, education, and the skills I bring to each project.
    </p>
  </div>
  {/* End Section Title */}

  <div className="container">
    <div className="row">
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 className="resume-title">Summary</h3>

        <div className="resume-item pb-0">
          <h4>Yokeshwaran K</h4>
          <p>
            <em>
              PHP Web Developer with 5 years of experience building and maintaining UK property/real estate websites.
              Currently expanding into Python &amp; Django, with hands-on project work in face recognition systems.
            </em>
          </p>
          <ul>
            <li>[Chennai, India]</li>
            <li>[9345542901]</li>
            <li>[yokeshwaranyoki001@example.com]</li>
          </ul>
        </div>
        {/* End Resume Item */}

        <h3 className="resume-title">Education</h3>

        <div className="resume-item">
          <h4>[MCA - Master of Computer Application]</h4>
          <h5>[2019] - [2021]</h5>
          <p>
            <em>[Vel Tech Dr.Rangaranajan Dr.Sagunthala Engineering College], [Avadi, Chennai]</em>
          </p>
        </div>
        <div className="resume-item">
          <h4>[BCA - Bachelor of Computer Application]</h4>
          <h5>[2016] - [2019]</h5>
          <p>
            <em>[Annai Therasa Arts and Science college], [Chengalpat]</em>
          </p>
        </div>
        {/* End Resume Item */}
      </div>

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <h3 className="resume-title">Professional Experience</h3>

        <div className="resume-item">
          <h4>PHP Web Developer</h4>
          <h5>[Sept 2021] - Present</h5>
          <p>
            <em>[Johnbhai Softcom Private Limited], [Chennai, India]</em>
          </p>
          <ul>
            <li>Built and maintained 10–25 UK property/real estate websites using PHP, MySQL, JavaScript, Bootstrap, and WordPress.</li>
            <li>Developed property search &amp; filtering systems with Google Maps integration.</li>
            <li>Owned client requirement gathering, bug fixes, hosting (cPanel), and post-launch SEO tasks (GA, Search Console, sitemaps).</li>
            <li>Progressed into a role with end-to-end ownership of project delivery.</li>
          </ul>
        </div>
        {/* End Resume Item */}

        <div className="resume-item">
          <h4>Python Project — Face Recognition Attendance System</h4>
          <h5>In Progress</h5>
          <p>
            <em>Personal Project</em>
          </p>
          <ul>
            <li>Built a self-directed attendance system using Python, Django, OpenCV, and face_recognition for automated check-in/check-out.</li>
            <li>Designed a MySQL-backed admin dashboard for attendance records and reports.</li>
            <li>Built to gain hands-on Python/Django experience as part of a planned transition into backend development.</li>
          </ul>
        </div>
        {/* End Resume Item */}
      </div>
    </div>
  </div>
</section>


    </main>
    </>
    
  );
}