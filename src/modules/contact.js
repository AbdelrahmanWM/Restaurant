import mapImgSrc from '../assets/map.jpg';
export default function generateContactPage(){

    const main=document.querySelector('main');
    main.innerHTML='';
    const contentDiv=document.createElement('div');
    contentDiv.classList.add('homeDiv');
    const discriptionDiv=document.createElement('div');
    discriptionDiv.classList.add('description')
    discriptionDiv.innerHTML=`
    <h3>Contact</h3>
    <p>(532) 435-5832</p>
    <p>spiceVistaBistro@gmail.com</p>
    `
    let mapImg=new Image();
    mapImg.src=mapImgSrc;
    mapImg.style.width='50%';
   
    discriptionDiv.appendChild(mapImg);

    contentDiv.appendChild(discriptionDiv);

    main.appendChild(contentDiv);
}

