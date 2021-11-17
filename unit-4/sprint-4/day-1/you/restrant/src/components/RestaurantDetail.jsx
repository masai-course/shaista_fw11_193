import "./Box.css";
const RestaurantDetails = props =>{
    const {name,description,image,price,rating,tags,veg,review,delivery,votes,Accept} = props;
    console.log(Accept);

    return (
    <div id="layout" style={{border:"1px solid green"}}>
        <div style={
            {
                display: 'flex',
                flexDirection:"row",
                padding:"20px"

            }}>
                <img style={{height:"250px",width:"5%",flex:1}} src={image} alt={name} />
                
                <div id="box1">
                <h4>Food Name : {name}</h4>
                <p>Description : {description}</p>
                <p>Price : ₹ {price}</p>
                <p>Tags : {tags.join(", ")}</p>
                <p>Delivery : {delivery}</p>
                <p>Veg or Non Veg : {veg}</p>
                <p>Payment : {Accept}</p>
                </div>
                <div id="right_review">
                    <p>{rating}</p>
                    <p>{votes} votes</p>
                    <p>{review} reviews</p>
                </div>
        </div>
        <p id="order">Order Online</p>
    </div>
    )
}

export {RestaurantDetails}


/* 
boughtTime: "296"
category: {$oid: '6152fd65091db0b8e304fd06'}
createdAt: {$date: '2021-09-28T11:39:22.154Z'}
description: "Amazing wraps and savings! What else can you ask for? Choose any two from our unique Signature Veg Wraps with delicious fillings & sauces all wrapped in a flaky paratha."
food_name: "2 Signature Veg Wraps at 289"
img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruvk4S2Snt1pnnZyVCoVaspjOnixXmjBl1_uOmE4tawnAlWVYdKGoqA60u-zoOUC-cNk&usqp=CAU"
price: 250
rating: 4.5
tags: (4) ['veg', 'snack', 'ct_amz_Meals', 'ct_amz_Combo']
updatedAt: {$date: '2021-09-28T11:39:22.154Z'}
veg_NonVeg: "veg"
_id: 1
*/