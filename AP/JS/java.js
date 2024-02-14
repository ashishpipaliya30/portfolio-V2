function toggleMenu() {
  var x = document.getElementById("navbarOptions");
  if (x.classList.contains("show-menu")) {
    x.classList.remove("show-menu");
  } else {
    x.classList.add("show-menu");
  }
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  var offset = section.offsetTop - (window.innerHeight - section.offsetHeight) / 2;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });

  var x = document.getElementById("navbarOptions");
  x.classList.remove("show-menu");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var btn = document.getElementById("scroll-to-top-btn");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function openEmailClient() {
  // Replace 'your-email@example.com' with your actual email address
  var emailAddress = 'ashishpipaliya30@gmail.com';
  // Replace 'Subject' with your desired subject line
  var subject = 'Hello!';
  // Replace 'Body' with your desired email body
  var body = 'Hi, I just wanted to say hello!';

  // Construct the mailto link
  var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Open the email client
  window.location.href = mailtoLink;
}

.next-container {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.782);
  background-color: white;
  text-align: center;
  padding: 50px 20px;
  margin: -50px auto 0; 
  width: 80%; 
  box-shadow: 0 0 12px black;
}

.frontend-heading {
  font-size: 35px;
  color: #333;
  margin-top: -10px;
}

.next-container p {
  font-size: 18px;
  color: #666;
}

.next-container img {
  margin-top: 15px;
  width: 15%; 
  max-width: 100%;
  height: auto; 
  aspect-ratio: 2/2;
  object-fit: contain;
}

#html {
  width: 14.6%;
  height: auto;
}

/* Responsive CSS */
@media screen and (max-width: 768px) {
  .next-container {
    max-width: 90%; /* Adjust width for smaller screens */
  }

  .next-container img{
    margin-top: 15px;
    width: 20%;
  }

  #html{
    width: 20%;
  }
}

.my-skills-wrapper {
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  height: 100vh; /* Optional: Full height of the viewport */
}

.my-skills {
  margin: 30px 0;
  background-color: #173a48;
  border-radius: 10px;
  height: 215px;
  text-align: center;
  padding-top: 15px;
  margin-top: 50px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.542);
}

.skill-bar {
  margin-top: 35px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.skill-label {
  width: 120px;
  font-size: 18px;
  color: #ffffff;
}

.skill-progress {
  flex-grow: 1;
  height: 15px;
  margin-right: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.414),
    inset -2px -2px 3px rgba(0, 0, 0, 0.542);
}

.skill-html,
.skill-css,
.skill-react {
  height: 100%;
  border-radius: 10px;
}

.skill-html {
  width: 90%;
  background-color: #B5D4DF;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.414),
    inset 2px 2px 5px rgba(0, 0, 0, 0.542);
}

.skill-css {
  width: 75%;
  background-color: #B5D4DF;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.414),
    inset 2px 2px 5px rgba(0, 0, 0, 0.542);
}

.skill-react {
  width: 30%;
  background-color: #B5D4DF;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.414),
    inset 2px 2px 5px rgba(0, 0, 0, 0.542);
}




/* Overall container styles */
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Projects grid layout */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
}

/* Individual project card styles */
.project {
  background-color: #f8f9fa;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Project title styles */
.project h2 {
  font-size: 24px;
  margin: 0;
  padding: 20px;
  background-color: #173a48;
  color: white;
}

/* Project content styles */
.project-link {
  padding: 20px;
}

/* Project image styles */
.project-link img {
  max-width: 100%;
  height: auto;
  box-shadow: 0 0 10px black;
  border-bottom: 1px solid #dee2e6;
}

/* Project description styles */
.project-link p {
  margin: 10px 0;
}

/* Project link styles */
.project-link a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: 3px solid #173a48;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* Project link hover effect */
.project-link a:hover {
  background-color: #173a48;
  color: white;
}

/* Bottom container styles */
.bottom-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* Responsive styles */
@media (max-width: 868px) {
  .container {
    width: 100%; /* Full width on smaller screens */
    padding: 10px; /* Adjust padding for smaller screens */
  }

  .projects {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust grid columns for smaller screens */
  }

  .project {
    border-radius: 0; /* Remove border radius for individual projects on smaller screens */
  }

  .project h2 {
    font-size: 20px; /* Adjust project title font size for smaller screens */
  }

  .project-link {
    padding: 10px; /* Adjust project link padding for smaller screens */
  }

  .project-link img {
    border-bottom: none; /* Remove bottom border for project images on smaller screens */
  }
}
