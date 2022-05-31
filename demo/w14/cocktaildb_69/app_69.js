import presentDrinks from "./src/presentDrinks_69.js";

//控制搜尋結果
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ts';
//全名：陶少煜 英文縮寫：tsy 只搜尋得到ts

//透過windows啟動，撈presntDrinks資料 =>步驟1
window.addEventListener('DOMContentLoaded',()=>{
    presentDrinks(URL);
});