import Image from "next/image";
import styles from "./page.module.css";


function Header(){
  return (
  
    <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
      <img src="img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle" />
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
        <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#">Dropdown 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li>
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
          I'm Web Developer
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
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
          Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      {/* About Content */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          {/* Profile Image */}
          <div className="col-lg-4">
            <Image
              src="/assets/img/my-profile-img.jpg"
              width={400}
              height={400}
              className="img-fluid"
              alt="Profile Image"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-8 content">
            <h2>Web Developer</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>18 SEP 1999</span></li>
                  {/*<li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>*/}
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>

            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut.
              Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
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
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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


    </main>
    </>
    
  );
}
