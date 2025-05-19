
'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Counter from '../components/contactForm.js'


function Header(){
  return (
   
    <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
      <img src="img/profile-img.png" alt="" className="img-fluid rounded-circle" />
    </div>

    <a href="index.html" className="logo d-flex align-items-center justify-content-center">
      
      <h1 className="sitename"></h1>
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
        <li><a href="#skills"><i className="bi bi-images navicon"></i> Skills</a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>

  </header>
 
  );
}

export default function Home() {
  const PersonalDetail = {Name:"Yokeshwaran K", Email : "yokeshwaranyoki001@gmail.com", Role : "Full Stack Web Developer", Age:"26", Address:"Kovilambakkam, Chennai - 600129", Mobile:"9345542901", Master:"Master of Computer Application", bachelor :{Ug_degree:"Bachelor of Computer Application", Passed_out : "2016 - 2019", College:"Annai Therasa Arts and Science College, Thirukkazhukundram"},Masters : {PG_degree : "Master of Computer Application", Passed_out : "2019 - 2021", College : "Vel Tech High Tech Engineering College, Avadi, Chennai"}, Work_exp :{Company_Name : "Johnbhai Softcom Pvt Ltd", Location : "Chennai - 600044", Joining : "2021 - Present"}, DOB : "18 SEP 1999"};
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
        <h2>{PersonalDetail.Name}</h2>
        <p>
          {PersonalDetail.Role}
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
        I am a professional Web Developer with over 3 years of experience in designing, developing, and maintaining dynamic and responsive websites and web applications.
        Throughout my career, I have successfully collaborated with clients and cross-functional teams to create high-performance websites, custom themes, plugins, and backend functionalities. I have a deep understanding of UI/UX principles, SEO best practices, and modern development frameworks, ensuring every project I undertake is not only visually compelling but also functionally sound.
        </p>
      </div>

      {/* About Content */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          {/* Profile Image */}
          <div className="col-lg-4 about-profile-img">
            <Image
              src="/img/profile-img.png"
              width={200}
              height={200}
              className="img-fluid"
              alt="Profile Image"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-8 content">
            <h2>{PersonalDetail.Role}</h2>
            {/*<p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>*/}

            <div className="row mt-5">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{PersonalDetail.DOB}</span></li>
                  {/*<li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>*/}
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>9876543210</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chennai</span></li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{PersonalDetail.Masters.PG_degree}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{PersonalDetail.Email}</span></li>
                  {/*<li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>*/}
                </ul>
              </div>
            </div>

            {/*<p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut.
              Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>*/}
          </div>
        </div>
      </div>
    </section>

<section id="skills" className="skills section light-background">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Skills</h2>
    <p>Through hands-on experience in real-world projects, I have cultivated a solid foundation in front-end and back-end web development. My skill set encompasses a diverse range of technologies and tools, enabling me to build responsive, scalable, and user-centric digital solutions.</p>
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
      </div>
    </div>
  </div>
</section>

<section id="resume" className="resume section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Resume</h2>
    <p>
    A results-driven and detail-oriented web developer with a strong educational background and hands-on experience in front-end and back-end development. Passionate about building clean, responsive, and user-friendly websites, with a continuous desire to learn and grow in the ever-evolving tech industry
    </p>
  </div>

  {/* Resume Content */}
  <div className="container">
    <div className="row">

      {/* Left Column */}
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        
        <h3 className="resume-title">Education</h3>
        <div className="resume-item">
          <h4>{PersonalDetail.Masters.PG_degree}</h4>
          <h5>{PersonalDetail.Masters.Passed_out}</h5>
          <p><em>{PersonalDetail.Masters.College}</em></p> 
          <p>
          Completed post-graduate studies with a focus on computer science and software development. Gained foundational knowledge in areas such as database systems, networking, and application development. Developed a strong academic base for a future in the IT industry.
          </p>
        </div>

        <div className="resume-item">
          <h4>{PersonalDetail.bachelor.Ug_degree}</h4>
          <h5>{PersonalDetail.bachelor.Passed_out}</h5>
          <p><em>{PersonalDetail.bachelor.College}</em></p>
          <p>
          Successfully completed undergraduate studies in computer applications. Built an understanding of fundamental computing concepts and programming logic. This program laid the groundwork for continued learning and advancement in the technology field.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <h3 className="resume-title">Professional Experience</h3>
        <div className="resume-item">
          <h4>{PersonalDetail.Work_exp.Company_Name}</h4>
          <h5>{PersonalDetail.Work_exp.Joining}</h5>
          <p><em>{PersonalDetail.Work_exp.Location}</em></p>
          <ul>
            <li>Front-end Development: Building the user interface and user experience
            of websites using HTML, CSS, Bootstrap, JavaScript, Ajax, jQuery. This 
            involves creating responsive and visual appealing designs that work
            across different devices.</li>
            <li>Back-end Development: Writing server-side code in PHP to handle
            database interactions with MYSQL.</li>
            <li>Content Management Systems (CMS): Working with platform like
             WordPress.</li>
            <li>Updating the PHP version of a website is an important task to ensure
            that the website remains secure, performs well, and stays compatible
            with the latest technologies.</li>
            <li>Implementation: We are responsible for implementing Google Analytics
            tracking code on websites. This involves adding the Google Analytics
            tracking script.</li>
          </ul>
        </div>

        {/*<div className="resume-item">
          <h4>Graphic design specialist</h4>
          <h5>2017 - 2018</h5>
          <p><em>Stepping Stone Advertising, New York, NY</em></p>
          <ul>
            <li>Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).</li>
            <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
            <li>Recommended and consulted with clients on the most appropriate graphic design</li>
            <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
          </ul>
        </div>*/}
      </div>

    </div>
  </div>
</section>

<section id="contact" className="contact section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    {/*<p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>*/}
  </div>

  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row gy-4">
      <div className="col-lg-5">
        <div className="info-wrap">
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>{PersonalDetail.Address}</p>
            </div>
          </div>

          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>{PersonalDetail.Mobile}</p>
            </div>
          </div>

          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>{PersonalDetail.Email}</p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            frameBorder="0"
            style={{ border: 0, width: '100%', height: '270px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="col-lg-7">
        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-4">
            <div className="col-md-6">
              <label htmlFor="name-field" className="pb-2">Your Name</label>
              <input type="text" name="name" id="name-field" className="form-control" required />
            </div>

            <div className="col-md-6">
              <label htmlFor="email-field" className="pb-2">Your Email</label>
              <input type="email" className="form-control" name="email" id="email-field" required />
            </div>

            <div className="col-md-12">
              <label htmlFor="subject-field" className="pb-2">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject-field" required />
            </div>

            <div className="col-md-12">
              <label htmlFor="message-field" className="pb-2">Message</label>
              <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>{' '}
            <strong className="px-1 sitename"></strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] 
          Designed by{' '}
          <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">
            BootstrapMade
          </a>{' '}
          Distributed by{' '}
          <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">
            ThemeWagon
          </a>*/}
        </div>
      </div>
    </footer>
    <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"></i>
    </a>
    </main>
    </>
    
  );
}
