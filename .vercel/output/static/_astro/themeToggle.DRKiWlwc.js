(function(){localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),document.documentElement.style.visibility="visible",document.documentElement.style.opacity="1"})();document.getElementById("mobileMenuButton").addEventListener("click",()=>{const e=document.getElementById("mobileMenu");e.classList.toggle("translate-x-full"),e.classList.contains("translate-x-full")?document.body.classList.remove("overflow-hidden"):document.body.classList.add("overflow-hidden")});document.getElementById("mobileMenuClose").addEventListener("click",()=>{document.getElementById("mobileMenu").classList.add("translate-x-full"),document.body.classList.remove("overflow-hidden")});const n=window.location.pathname,l=window.location.hash,c=document.querySelectorAll(".nav-link");function o(){c.forEach(e=>{e.classList.remove("nav-link-active-dark","nav-link-active-light","nav-link-active");const t=e.getAttribute("href");(n===t||n==="/"&&t==="/"||l===t)&&(e.classList.add("nav-link-active"),document.documentElement.classList.contains("dark")?e.classList.add("nav-link-active-dark"):e.classList.add("nav-link-active-light"))})}o();const s=new MutationObserver(o);s.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let a=()=>{localStorage.theme==="light"?(localStorage.theme="dark",document.documentElement.classList.add("dark")):(localStorage.theme="light",document.documentElement.classList.remove("dark"))};const i=document.querySelector("#theme-switch");i.addEventListener("click",function(){a()});
