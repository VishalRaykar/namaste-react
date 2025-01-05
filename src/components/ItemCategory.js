const ItemCategory=(data)=>{
    //console.log(itemcatdata);
    return(
        <div>
            <div className="w-4/12 bg-gray-50 shadow-lg p-4">
                <span>{data.itemcatdata.title + " ("+data.itemcatdata.itemCards.length+")"}</span>
                <span>  🔽</span>
            </div>
            <div>
                <ul className="m-2 p-1">                
                    {
                       data.itemcatdata.itemCards?.map(item=><li key={item.id} className="pt-1">- {item.card.info.name} | Rs. {item.card.info.finalPrice/100}</li>)
                    }                
                </ul>  
            </div>
        </div>
    )
}

export default ItemCategory;