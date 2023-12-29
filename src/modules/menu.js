import salmonImg from '../assets/baked-durum-topped-with-sour-cream-sesame.jpg'
import mashroomImg from '../assets/pexels-max-griss-6406460.jpg';
export default function generateMenuPage(){
    const main=document.querySelector('main');
    main.innerHTML='';
    const contentDiv=document.createElement('div');
    contentDiv.classList.add('homeDiv');
    let img=new Image();
    img.src=salmonImg;
    img.style.width='500px';
    img.style.height='500px';

    let meal=document.createElement('div');
    meal.innerHTML=`</img><p class='large'>Grilled Salmon with Lemon Herb Butter</p>
    <p>Succulent salmon fillet perfectly grilled and drizzled with a zesty lemon herb butter. Served with a side of roasted vegetables, this dish offers a delightful balance of freshness and savory goodness. </p>
    `
    meal.prepend(img);
    contentDiv.appendChild(meal);


    let img2=new Image();
    img2.style.width='500px';
    img2.style.height='500px';
    img2.src=mashroomImg;
    meal=document.createElement('div');
    meal.innerHTML=`<p class='large'>Mushroom Truffle Risotto</p>
    <p>Creamy arborio rice cooked to perfection, infused with earthy mushrooms and a hint of truffle oil. This comforting risotto is a gastronomic delight, capturing the essence of rich flavors and luxurious textures.</p>
    `
    meal.prepend(img2);
    contentDiv.appendChild(meal);

    main.appendChild(contentDiv);
}

