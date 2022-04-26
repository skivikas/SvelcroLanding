<script>
	export let name;
	import Navbar from "./Components/Navbar/Navbar.svelte";
	import Banner from "./Components/Banner/Banner.svelte";
	import Services from "./Components/Services/Services.svelte";
	import About from "./Components/About/About.svelte";
	import Testimonials from "./Components/Testimonials/Testimonials.svelte";
	import Social from "./Components/Social/Social.svelte";
	import Footer from "./Components/Footer/Footer.svelte";
	import DATA from "./Data/data";
</script>


<!-- Navbar -->
<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
<!-- Banner -->
<Banner bannerData={DATA.BANNER_DATA} />
<!-- Services -->
<Services serviceData={DATA.SERVICE_DATA} />
<!-- About -->
<About aboutData={DATA.ABOUT_DATA} />
<!-- Testimonials -->
<Testimonials testimonialData={DATA.TESTIMONIAL_DATA} />
<!-- Social Media -->
<!-- <Social socialData={DATA.SOCIAL_DATA} /> -->
<!-- Footer -->
<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />

<style>
	body {
		background-color: rgb(64, 64, 64)
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>