//從步驟2真正抓到資料=>步驟3
const fetchDrinks = async (URL)=>{
    try{
        const respose =await fetch(URL);
        const data =await respose.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export default fetchDrinks;