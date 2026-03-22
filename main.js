// main.js
// Global navigation, cursor, shared interactions for CultureArc landing

// --- Custom Cursor ---
const cursorDot = document.createElement('div');
const cursorRing = document.createElement('div');
cursorDot.className = 'ca-cursor-dot';
cursorRing.className = 'ca-cursor-ring';
document.body.appendChild(cursorDot);
document.body.appendChild(cursorRing);

let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let ringX = cursorX;
let ringY = cursorY;

document.addEventListener('pointermove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  cursorDot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
});

function animateCursor() {
  requestAnimationFrame(animateCursor);
  const lerp = 0.17;
  ringX += (cursorX - ringX) * lerp;
  ringY += (cursorY - ringY) * lerp;
  cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
}
animateCursor();

// Grow ring on interactive elements
['a', 'button', '.tilt-card', '.btn'].forEach((selector) => {
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(selector)) {
      cursorRing.classList.add('is-active');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(selector)) {
      cursorRing.classList.remove('is-active');
    }
  });
});

// --- Navigation + header scroll ---
document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  const header = document.getElementById('header');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// --- Card tilt utility (for any .tilt-card element) ---
function initTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach((card) => {
    const maxTilt = 10;
    const rect = card.getBoundingClientRect();

    function handleMove(e) {
      const bounds = card.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const rx = ((y / bounds.height) - 0.5) * -2 * maxTilt;
      const ry = ((x / bounds.width) - 0.5) * 2 * maxTilt;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    }

    function reset() {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    }

    card.addEventListener('pointermove', handleMove);
    card.addEventListener('pointerleave', reset);
  });
}

document.addEventListener('DOMContentLoaded', initTiltCards);

// --- Jobs, testimonials, forms etc. moved from inline script ---

const jobs = [
  { title: "Senior Java Developer", location: "Pune", exp: "Senior", desc: "Experience with Spring Boot and Microservices architecture." },
  { title: "React Native Engineer", location: "Remote", exp: "Mid", desc: "Build hybrid mobile applications for global fintech clients." },
  { title: "Data Scientist", location: "Bangalore", exp: "Senior", desc: "Expertise in Python, Machine Learning, and Big Data (Hadoop)." },
  { title: "DevOps Engineer", location: "USA", exp: "Mid", desc: "AWS/Azure certification required with CI/CD pipeline experience." },
  { title: "QA Automation Tester", location: "Pune", exp: "Junior", desc: "Selenium and Java knowledge required for automated testing." },
  { title: ".NET Architect", location: "Remote", exp: "Senior", desc: "Lead enterprise solution design using .NET Core and Azure." }
];

let jobContainer;
let notificationBox;

document.addEventListener('DOMContentLoaded', () => {
  jobContainer = document.getElementById('job-container');
  notificationBox = document.getElementById('notification-box');

  if (jobContainer) {
    renderJobs(jobs);
  }
  initTestimonialCarousel();
  setupIntersectionObserver();
  initSolutionSystem();
});

// Notification
function showNotification(message) {
  if (!notificationBox) return;
  notificationBox.textContent = message;
  notificationBox.classList.add('show');
  notificationBox.style.display = 'block';

  setTimeout(() => {
    notificationBox.classList.remove('show');
    setTimeout(() => {
      notificationBox.style.display = 'none';
    }, 500);
  }, 3000);
}

// Jobs
function renderJobs(jobList) {
  if (!jobContainer) return;
  jobContainer.innerHTML = '';
  if (jobList.length === 0) {
    jobContainer.innerHTML = '<p class="text-center">No jobs found matching your criteria.</p>';
    return;
  }
  jobList.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card fade-in visible';
    card.innerHTML = `
      <div class="job-info">
          <h3 style="color: #f9fafb; font-size: 1.25rem;">${job.title}</h3>
          <div class="job-meta">
              <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  ${job.location}
              </span>
              <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  ${job.exp} Level
              </span>
          </div>
          <p style="font-size: 0.95rem; color: #9ca3af;">${job.desc}</p>
      </div>
      <button class="btn btn-outline" onclick="showNotification('Thank you for your interest! The application portal is coming soon.')">Apply Now</button>
    `;
    jobContainer.appendChild(card);
  });
}

function filterJobs() {
  const searchEl = document.getElementById('job-search');
  const locationEl = document.getElementById('location-filter');
  const expEl = document.getElementById('exp-filter');
  if (!searchEl || !locationEl || !expEl) return;

  const search = searchEl.value.toLowerCase();
  const location = locationEl.value;
  const exp = expEl.value;

  const filtered = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search) || job.desc.toLowerCase().includes(search);
    const matchesLoc = location === "" || job.location.includes(location) || (location === "Remote" && job.location === "Remote");
    const matchesExp = exp === "" || job.exp === exp;
    return matchesSearch && matchesLoc && matchesExp;
  });

  renderJobs(filtered);
}
window.filterJobs = filterJobs;

// Testimonial carousel
function initTestimonialCarousel() {
  const track = document.getElementById('testimonial-track');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!track || !dotsContainer) return;
  const slides = document.querySelectorAll('.testimonial-item');
  let index = 0;

  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');

  function goToSlide(n) {
    index = n;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    goToSlide(index);
  }, 5000);
}

// Modal logic
function openModal() {
  const modal = document.getElementById('hireModal');
  const navMenu = document.getElementById('nav-menu');
  if (!modal) return;
  modal.classList.add('open');
  if (navMenu) navMenu.classList.remove('active');
}
function closeModal() {
  const modal = document.getElementById('hireModal');
  if (!modal) return;
  modal.classList.remove('open');
}
window.openModal = openModal;
window.closeModal = closeModal;

window.addEventListener('click', (event) => {
  const modal = document.getElementById('hireModal');
  if (event.target === modal) {
    closeModal();
  }
});

function handleModalSubmit(e, message) {
  e.preventDefault();
  closeModal();
  showNotification(message);
  e.target.reset();
}
window.handleModalSubmit = handleModalSubmit;

// Form handling
function handleFormSubmit(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, textarea');
  let valid = true;
  inputs.forEach(input => {
    if (!input.value) {
      input.classList.add('input-error');
      valid = false;
    } else {
      input.classList.remove('input-error');
    }
  });

  if (valid) {
    const success = document.getElementById('form-success');
    if (success) {
      success.style.display = 'block';
    }
    showNotification('Your message has been sent!');
    e.target.reset();
    setTimeout(() => {
      if (success) {
        success.style.display = 'none';
      }
    }, 4000);
  }
}
window.handleFormSubmit = handleFormSubmit;

