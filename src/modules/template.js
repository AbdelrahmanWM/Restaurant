
import bgImgSrc from '../assets/delicious-burger-min.jpg';

const contentDiv = document.getElementById('content');

// Function to create and set background image
function setBackground() {
  contentDiv.style.backgroundImage = `url('${bgImgSrc}')`;
}

// Function to create header
function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const titleHeader = document.createElement('h1');
  titleHeader.textContent = 'SpiceVista Bistro';
  header.appendChild(titleHeader);
  nav.innerHTML = '<a id="home" class="active">Home</a><a id="menu">Menu</a><a id="contact">Contact</a>';
  header.appendChild(nav);
  document.body.appendChild(header);
}

// Function to create main content
function createMain() {
  const mainDiv = document.createElement('main');
  mainDiv.textContent='main';
  document.body.appendChild(mainDiv);
}

// Function to create footer
function createFooter() {
  const footer = document.createElement('footer');
  const paragraph = document.createElement('p');
  paragraph.textContent = `Copyright &copy; 2023 Abdel-Rahman`;
  footer.appendChild(paragraph);
  document.body.appendChild(footer);
}

export default function generateTemplate(){
  setBackground();
  createHeader();
  createMain();
  createFooter();
}