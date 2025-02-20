window.addEventListener('scroll', function () {
    var sticky = document.querySelector('.sticky-topp');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { 
        sticky.classList.add('scrolled');
    } else {
        sticky.classList.remove('scrolled');
    }
});

  let guestCount = 0;
  const guestCountSpan = document.getElementById('guestCount');

  function incrementGuest() {
    guestCount++;
    guestCountSpan.textContent = guestCount;
  }

  function decrementGuest() {
    if (guestCount > 0) {
      guestCount--;
      guestCountSpan.textContent = guestCount;
    }
  
}

/** nav active */
// Ambil semua section dan nav-link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

const observerOptions = {
  threshold: 0.6, // Section dianggap terlihat jika 60% tampak di viewport
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Hilangkan kelas active dari semua nav-link
      navLinks.forEach(link => link.classList.remove('active'));
      // Cari nav-link yang sesuai dengan id section
      const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => observer.observe(section));


$(document).ready(function() {
  $("#testimonial-carousel").owlCarousel({
    loop: true,
    stagePadding: 0,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      768: { // Untuk layar tablet ke atas
        items: 2
      },
      992: { // Untuk layar desktop
        items: 3
      }
    }
  });
});


const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
    // Menambahkan event listener untuk klik
    button.addEventListener('click', function () {
        // Toggle kelas 'liked' pada tombol like
        button.classList.toggle('liked');
    });
});

/** testimonial */
var swiper = new Swiper(".slider", {
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,            
    disableOnInteraction: false,
  },
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  breakpoints: {
    991: { 
      slidesPerView: 2, // 2 items untuk layar desktop
    },
    768: { 
      slidesPerView: 1, // 1 item untuk layar tablet
    },
    0: { 
      slidesPerView: 1, // 1 item untuk layar mobile
    }
  }
});


const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

function toggleForm() {
  const formPopup = document.querySelector(".form-popup");

  // Periksa ukuran layar sebelum toggle
  if (window.innerWidth <= 767) {
    formPopup.style.display = (formPopup.style.display === "flex") ? "none" : "flex";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var youtubeModal = document.getElementById("youtubeModal");
  var youtubeFrame = document.getElementById("youtubeFrame");
  
  // URL video YouTube
  var videoURL = "https://www.youtube.com/embed/8S1JjsK86iU?si=AB2fvCLGOAilTrn-&autoplay=1";

  youtubeModal.addEventListener("show.bs.modal", function () {
    youtubeFrame.src = videoURL; // Atur URL video saat modal dibuka
  });

  youtubeModal.addEventListener("hidden.bs.modal", function () {
    youtubeFrame.src = ""; // Hentikan video saat modal ditutup
  });
});
