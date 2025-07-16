import React, { useEffect } from "react";
import "./App.css";
import logo from "./Logo.png";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div>
      <nav>
        <img src={logo} alt="Infralyze Logo" className="logo" />
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="fade-in">
        <h1>Infralyze Solutions</h1>
        <p>Empowering Digital Infrastructure & Insights with more than 16 years of industry experience.</p>
        <div className="hero-btns">
          <a href="#services">Our Services</a>
          <a href="#contact">Get in Touch</a>
        </div>
      </header>

      <section id="services">
        <h2>Our Services</h2>
        <div className="services">
          <div className="card">
            <i className="fas fa-network-wired"></i>
            <h3>Telecom & GPON Services</h3>
            <p>Network deployment, optimization, audits, and field engineering support.</p>
          </div>
          <div className="card">
            <i className="fas fa-project-diagram"></i>
            <h3>Project Management</h3>
            <p>Planning, budgeting, monitoring & evaluation for public and private sector projects.</p>
          </div>
          <div className="card">
            <i className="fas fa-chart-line"></i>
            <h3>Data Analytics & BI</h3>
            <p>Interactive dashboards in Power BI, Excel, and Cognos with actionable insights.</p>
          </div>
          <div className="card">
            <i className="fas fa-cloud"></i>
            <h3>AWS Cloud & DevOps</h3>
            <p>Architecture planning, cloud migration, and hybrid deployment consultation.</p>
          </div>
        </div>
      </section>

      <section id="why">
        <h2>Why Choose Infralyze?</h2>
        <ul>
          <li>More than 16 years of industry experience</li>
          <li>Certified Professionals (AWS, CCNA, PMP, Python)</li>
          <li>Extensive Work in Public Sector (HEC, MoITT, etc.)</li>
          <li>Client-Centric and Results-Driven</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Infralyze Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
