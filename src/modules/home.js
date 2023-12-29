export default function generateHomePage(){
    
    const main=document.querySelector('main');
    main.innerHTML='';
    const contentDiv=document.createElement('div');
    contentDiv.classList.add('homeDiv');
    
    const discriptionDiv=document.createElement('div');
    discriptionDiv.classList.add('description')
    discriptionDiv.innerHTML='<h3>SpiceVista Bistro</h3><p>A culinary journey of flavors <br>where tradition meets innovation in every bite. <br>Indulge in exquisite creations and elevate your dining experience</p>'
    contentDiv.appendChild(discriptionDiv);

    const schedule=document.createElement('div');
    schedule.classList.add('schedule');
    schedule.innerHTML=`<h3>Hours</h3>
    <p>Monday to Friday: 6am - 8pm </p>
    <p>Saturday and Sunday: 8am - 6pm </p>`;
    contentDiv.appendChild(schedule);

    const location=document.createElement('div');
    location.classList.add('location');
    location.innerHTML=`<h3>Location</h3>
    <p>4548 rue Jean-Talon Quest, Montreal</p>`
    contentDiv.appendChild(location);
    main.appendChild(contentDiv);
}

