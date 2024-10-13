<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<!--========== HEADER ==========-->
<Navbar>
	<NavBrand href="/">
		<img src="assets/images/xylo-logo.png" class="me-3 h-12 sm:h-16" alt="Xylo Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Xylo</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Services</NavLi>
		<NavLi href="/pricing">Clients</NavLi>
		<NavLi href="/contact">Contact Us</NavLi>
	</NavUl>
</Navbar>

<main class="l-main">
	<!--========== TEAM ==========-->
	<section class="team section bd-container" id="team">
		<span class="section-subtitle">Meet our team</span>
		<h2 class="section-title">Dedicated Professionals</h2>
		<div class="team__container bd-grid">
			<div class="team__member">
				<img src="path/to/team-member1.jpg" alt="Team Member 1" class="team__img" />
				<h3 class="team__name">John Doe</h3>
				<p class="team__role">CEO & Founder</p>
				<p class="team__description">
					With over 20 years of experience, John leads the team with passion and expertise.
				</p>
			</div>

			<div class="team__member">
				<img src="path/to/team-member2.jpg" alt="Team Member 2" class="team__img" />
				<h3 class="team__name">Jane Smith</h3>
				<p class="team__role">Chief Technology Officer</p>
				<p class="team__description">
					Jane is the mastermind behind our innovative solutions and cutting-edge technology.
				</p>
			</div>

			<div class="team__member">
				<img src="path/to/team-member3.jpg" alt="Team Member 3" class="team__img" />
				<h3 class="team__name">Emily Johnson</h3>
				<p class="team__role">Marketing Director</p>
				<p class="team__description">
					Emily ensures our message reaches the right audience, driving our brand forward.
				</p>
			</div>
		</div>
	</section>

	<!--========== CONTACT ==========-->
	<section class="contact section bd-container" id="contact">
		<span class="section-subtitle">Get in touch</span>
		<h2 class="section-title">Contact Us</h2>
		<form action="submit_form.php" method="POST" class="contact__form">
			<input type="text" class="contact__input" placeholder="Your Name" required />
			<input type="email" class="contact__input" placeholder="Your Email" required />
			<textarea class="contact__input" placeholder="Your Message" required></textarea>
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
