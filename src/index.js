import styles from './styles.css';

import generateTemplate from './modules/template';
import generateHomePage from './modules/home';
import generateMenuPage from './modules/menu';
import generateContactPage from './modules/contact';

generateTemplate();
generateHomePage();

function switchPages(){
  const homePage = document.getElementById('home');
  const menuPage = document.getElementById('menu');
  const contactPage = document.getElementById('contact');
  homePage.onclick = ()=>{
    generateHomePage();
    homePage.classList.add('active');
    menuPage.classList.remove('active');
    contactPage.classList.remove('active');
  }
  menuPage.onclick = ()=>{
    generateMenuPage();
    menuPage.classList.add('active');
    homePage.classList.remove('active');
    contactPage.classList.remove('active');
  }
  contactPage.onclick = ()=>{
    generateContactPage();
    contactPage.classList.add('active');
    homePage.classList.remove('active');
    menuPage.classList.remove('active');
  }
}
switchPages();

