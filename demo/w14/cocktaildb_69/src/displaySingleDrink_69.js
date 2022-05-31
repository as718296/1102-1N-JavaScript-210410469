import get from './getElement.js';
import { hideLoading } from './toggleLoading_69.js';

const displayDrinks=async ({ drinks }) => {
    console.log('drinks', drinks);
        const title = get('.title');
        const section= get('.section-center');
        //測試有無抓到tile及section-center
        console.log('title', title);
        console.log('section', section);
     //提示無搜尋到該物件    
    if (!drinks){
        hideLoading();
        title.textContent ='sorry, no drinks matched your search';
        section.innerHTML = null;
        return;
    }

    const newDrinks =drinks.map((drink)=>{
        const{ isDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `
        <a href="drink_69.html">
        <article class ="cocktail" data-id="${id}">
        <img src="${image}" alt="cocktail" />
        <h3>${name}</h3>
      </article>
    </a>
        `;
    //加入join變字串
    }).join('');

    //改變成陣列
    //console.log('newDrinks', newDrinks);
    hideLoading();
    title.textContent ='';
    section.innerHTML = newDrinks;
    return section;
};

//回傳section-center 區塊資料
export default displayDrinks;