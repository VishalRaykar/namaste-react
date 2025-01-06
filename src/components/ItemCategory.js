import {useState} from 'react';

const ItemCategory=({itemcatdata})=>{
    //console.log(itemcatdata);
    const [showItems,setShowItems] = useState(false);

    const handleClick=()=>{
        setShowItems(!showItems);
    };

    return(
        <div>
            <div className="w-4/12 bg-gray-50 shadow-lg p-4" onClick={handleClick}>
                <span>{itemcatdata.title + " ("+itemcatdata.itemCards.length+")"}</span>
                <span>  🔽</span>
            </div>
            <div>
                <ul className="m-2 p-1">                
                    {
                     showItems && itemcatdata.itemCards?.map(item=><li key={item.card.info.name} className="pt-1">- {item.card.info.name} | Rs. {item.card.info.finalPrice/100}</li>)
                    }                
                </ul>  
            </div>
        </div>
    )
}

export default ItemCategory;