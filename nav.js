let navbar = `<header>
<nav>
  <div class="logo">
    <img src="logo.jpeg" />
    Branding Wellness
  </div>

  <ul class="nav-ul">
    <li><a href="index.html">Home</a></li>
    <li><a href="About.html">About</a></li>
    <li><a href="ourservices.html">Our Services</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>

  <div class="hamburger">
    <i class="fa-solid fa-bars fa-2xl"></i>
  </div>
</nav>
</header>
`
document.body.insertAdjacentHTML("afterbegin", navbar);

const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.nav-ul');

hamburger.addEventListener('click', () => {
    ul.classList.toggle('ham-active');

    let ham_child = hamburger.firstElementChild;

    if (ul.classList.contains('ham-active')) {
        ham_child.classList.replace('fa-bars', 'fa-xmark');
    }

    else {
        ham_child.classList.replace('fa-xmark', 'fa-bars');
    }
});
