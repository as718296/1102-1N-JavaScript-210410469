const links =document.querySelectorAll('#heading a')
const main =document.querySelector('#main ul')
const main1 =document.querySelector('#main ')
const footer =document.querySelector('#footer')
const showimg =document.querySelector('.show-images')
const heading =document.querySelector('#heading')
const ifame =document.querySelector('.iframe-container')
const tku =document.querySelector('.tku-images ')
const section =document.querySelector('#section')
const changeVideo =(index)=>{
    switch(index){
        case 1:
            ifame.innerHTML =`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RechrtUxfQc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
            break;
        case 2:
            ifame.innerHTML =`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MRWX49Furew"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
            break;
        case 3:
            ifame.innerHTML =`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/METhdbL_iMw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
            break;
        case 4:
            ifame.innerHTML =`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZyDbq-lEKTo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
            break;
        case 5:
            ifame.innerHTML =`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NlsrJbVvjaA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
            break;
    }

}

const changeColor =()=>{
    heading.style.backgroundColor ='#9AADBF'
    main1.style.backgroundColor='#9AADBF'
    footer.style.backgroundColor='#9AADBF'
    section.style.backgroundColor='#9AADBF'
}

const addtku60 =()=>{
    main.innerHTML =`<li><a onclick="changeVideo(1)">淡江大戲 1</a></li>
    <li><a onclick="changeVideo(2)">淡江大戲 2</a></li>
    <li><a onclick="changeVideo(3)">淡江大戲 3</a></li>
    <li><a onclick="changeVideo(4)">淡江大戲 4</a></li>
    <li><a onclick="changeVideo(5)">淡江大戲 5</a></li>`
}
const showimgs = ()=>{
    showimg.innerHTML=`<img src="./images/TKU1.png" width="16%" />
    <img src="./images/TKU2.png" width="16%"/>
    <img src="./images/TKU3.png" width="16%"/>
    <img src="./images/TKU4.png" width="16%"/>
    <img src="./images/TKU5.png" width="16%"/>`;
    tku.classList.toggle('invisible');
}
links[0].addEventListener('click',changeColor);
links[1].addEventListener('click',showimgs);
links[2].addEventListener('click',addtku60);
links[3].addEventListener('click',changeVideo);