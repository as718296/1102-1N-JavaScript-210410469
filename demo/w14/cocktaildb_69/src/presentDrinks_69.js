import fetchDrinks from "./fetchDrinks_69.js";
import displayDrinks from "./displaySingleDrink_69.js";

//透過步驟1抓到資料=>步驟2
const presentDrinks=async(URL)=>{
    //fetch drinks
    const data = await fetchDrinks(URL);
    console.log('drinks data', data);
    const section = await displayDrinks(data);
};

//匯出presntDrinks
export default presentDrinks;
