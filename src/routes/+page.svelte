<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="icon" type="image/png" href="assets/images/favicon.ico" />

  <!--========== BOX ICONS ==========-->
  <link
    href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
    rel="stylesheet"
  />

  <!--========== CSS ==========-->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
  />
  <link rel="stylesheet" href="/app.css" />

  <title>Xylo</title>
</head>
<body>
  <!--========== HEADER ==========-->
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <a href="/" class="nav__logo">XYLO</a>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">About</a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">Services</a>
          </li>
          <li class="nav__item">
            <a href="#clients" class="nav__link">Clients</a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">Contact us</a>
          </li>
          <li><i class="bx bx-moon change-theme" id="theme-button"></i></li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>

  <main class="l-main">
    <!--========== HOME ==========-->
    <section class="home" id="home">
      <div class="home__container bd-container bd-grid">
        <div class="home__data">
          <h1 class="home__title">Xylo</h1>
          <h2 class="home__subtitle">Simplify your<br />inventory.</h2>
          <a href="#services" class="button">View Services</a>
        </div>
        <img src="assets/images/xylo-logo.png" alt="" class="home__img" />
      </div>
    </section>

    <!--========== ABOUT ==========-->
    <section class="about section bd-container" id="about">
      <span class="section-subtitle">Introducing</span>
      <h2 class="section-title">XyloBalance</h2>
      <p class="about__description">
        XyloBalance is at the forefront of revolutionizing the way we weigh and
        measure. With our innovative approach and cutting-edge technology, we
        deliver unparalleled accuracy and efficiency in weight measurement. Our
        mission is to empower businesses and individuals alike with reliable
        tools that enhance productivity and ensure quality control.
      </p>
      <a href="#contact" class="button">Learn More</a>
    </section>

    <!--========== TEAM ==========-->
    <section class="team section bd-container" id="team">
      <span class="section-subtitle">Meet our team</span>
      <h2 class="section-title">Dedicated Professionals</h2>
      <div class="team__container bd-grid">
        <div class="team__member">
          <h3 class="team__name">John Doe</h3>
          <p class="team__role">CEO & Founder</p>
          <p class="team__description">
            With over 20 years of experience, John leads the team with passion
            and expertise.
          </p>
        </div>

        <div class="team__member">
          <h3 class="team__name">Jane Smith</h3>
          <p class="team__role">Chief Technology Officer</p>
          <p class="team__description">
            Jane is the mastermind behind our innovative solutions and
            cutting-edge technology.
          </p>
        </div>

        <div class="team__member">
          <h3 class="team__name">Emily Johnson</h3>
          <p class="team__role">Marketing Director</p>
          <p class="team__description">
            Emily ensures our message reaches the right audience, driving our
            brand forward.
          </p>
        </div>
      </div>
    </section>

    <!--========== CONTACT ==========-->
    <section class="contact section bd-container" id="contact">
      <span class="section-subtitle">Get in touch</span>
      <h2 class="section-title">Contact Us</h2>
      <form action="submit_form.php" method="POST" class="contact__form">
        <input
          type="text"
          class="contact__input"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          class="contact__input"
          placeholder="Your Email"
          required
        />
        <textarea class="contact__input" placeholder="Your Message" required
        ></textarea>
        <button type="submit" class="button">Send Message</button>
      </form>
    </section>

    <!--========== FOOTER ==========-->
    <footer class="footer section bd-container">
      <div class="footer__content">
        <h3 class="footer__title">XyloBalance</h3>
        <p class="footer__description">Innovating the future of measurement.</p>
        <div class="footer__socials">
          <a href="https://facebook.com" class="footer__social">Facebook</a>
          <a href="https://x.com" class="footer__social">Twitter</a>
          <a href="https://www.linkedin.com" class="footer__social">LinkedIn</a>
        </div>
      </div>
    </footer>
  </main>
</body>
