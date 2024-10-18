<script>
  import "../app.css";
  import { base } from "$app/paths";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    DarkMode,
    Button,
  } from "flowbite-svelte";
  import { Input } from "flowbite-svelte";
  let darkmodebtn =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-10 z-50";
</script>

<Navbar>
  <NavBrand href="{base}/">
    <img src="assets/images/xylo-logo.png" class="w-32" alt="Xylo Logo" />
    <span
      class="self-center whitespace-nowrap text-6xl font-semibold dark:text-white pl-10"
      >Xylo</span
    >
  </NavBrand>
  <NavHamburger />
  <NavUl class="pt-5 pl-32">
    <NavLi href="{base}/about" class="text-4xl">About</NavLi>
    <NavLi href="{base}/docs/components/navbar" class="text-4xl">Services</NavLi
    >
    <NavLi href="{base}/pricing" class="text-4xl">Clients</NavLi>
    <NavLi href="{base}/contact" class="text-4xl">Contact Us</NavLi>
  </NavUl>
</Navbar>
<DarkMode btnClass={darkmodebtn} />
<slot />
