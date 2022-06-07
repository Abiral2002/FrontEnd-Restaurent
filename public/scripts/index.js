let cart=[]
let category=[['Momo',
            [
                {
                id:1,
                photo:"https://comicoscafe.com/wp-content/uploads/2022/01/chicken-jhol-momo.jpg",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"200"
            },
            {
                id:2,
                photo:"https://comicoscafe.com/wp-content/uploads/2022/01/chicken-jhol-momo.jpg",
                name:"Chiken Momo",
                type:"C Momo",
                price:"4100"
            },
            {
                id:3,
                photo:"https://comicoscafe.com/wp-content/uploads/2022/01/chicken-jhol-momo.jpg",
                name:"Buff Momo",
                type:"Jhol Momo",
                price:"250"
            },
            {
                id:4,
                photo:"https://comicoscafe.com/wp-content/uploads/2022/01/chicken-jhol-momo.jpg",
                name:"Buff Momo",
                type:"C Momo",
                price:"300"
            },
            {
                id:5,
                photo:"https://comicoscafe.com/wp-content/uploads/2022/01/chicken-jhol-momo.jpg",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            }
        ]
        ],['Burger',
            [
                {
                id:6,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Cheese Burger",
                type:"Cheese",
                price:"500"
            },
            {
                id:7,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Burger",
                type:"No cheese",
                price:"400"
            },
            {
                id:8,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Veg Burger",
                type:"With cheese",
                price:"300"
            },
            {
                id:9,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Burger",
                type:"Original",
                price:"200"
            },
            {
                id:10,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Beef Burger",
                type:"With cheese",
                price:"600"
            }
        ]
        ],['Chicken',
        [
            {
            id:11,
            photo:"https://www.seriouseats.com/thmb/LJQ1jFVrlJbSb23MmK5iwHUr_EY=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg",
            name:"Roasted Chicken",
            type:"Chicken",
            price:"200"
        },
        {
            id:12,
            photo:"https://static.toiimg.com/thumb/53007558.cms?width=1200&height=900",
            name:"Grilled Chicken",
            type:"Grilled",
            price:"1000"
        },
        {
            id:13,
            photo:"https://www.eatwell101.com/wp-content/uploads/2020/02/chicken-soup-recipe-3.jpg",
            name:"Chicken Soup",
            type:"Soup",
            price:"500"
        },
        {
            id:14,
            photo:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/61fe96e9-4826-4ab8-880e-eac0c8038cf3/Derivates/ac114672-02c3-40e7-a0d4-fc547abb1a8e.jpg",
            name:"Chicken",
            type:"None",
            price:"500"
        },
        {
            id:15,
            photo:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F02%2F15%2F0886_192302_DuPree_MR_13299-2000.jpg&q=60",
            name:"Chicken 2",
            type:"Jhol",
            price:"700"
        }
    ]
    ]]

document.querySelector("#close-cart").addEventListener('click',()=>{
    document.querySelector(".app").style.display="flex"
    document.querySelector(".cart-screen").style.display="none"
})

document.querySelector(".cart-icon").addEventListener('click',()=>{
    document.querySelector(".cart-screen").style.display="flex"
    document.querySelector(".app").style.display="none"
})

const findItem=(id)=>{
    let items
    category.forEach(element=>{
        let item= element[1].find(data=>data.id==id)
        item?items=item:null
        item?items.quantity=1:null
    })
    return items
}


function alterPopup(message){
    const popup=document.querySelector("#popup")
    if(!message){
        popup.childNodes[1].innerHTML=""
        popup.style.display='none'
        return
    }
    popup.childNodes[1].innerHTML=message
    popup.style.display='flex'
}


function TempleteEng(text,data)
{
    let re=/<%([^%>]+)?%>/g,match
    while(match=re.exec(text)){
        text=text.replace(match[0],data[match[1]])
    }
    return text
    
}

function sendOrder() { 
    if (cart[0]==undefined){
        alterPopup("Order Not Valid")
        return
    }
    alterPopup("Order placed")
    cart=[]
    renderCart()
 }


function alterStock(e,id){
    let alter=($(e)[0].id=="add-stock")?1:-1
    let index=cart.findIndex(data=>{
        return data.id==id
    })
    cart[index].quantity=cart[index].quantity+alter
    if(cart[index].quantity <= 0)cart[index].quantity=1
    renderCart(cart)

}

// To re render Cart

function renderCart(cart){
    const cartContainer=$("#cart-container")
    if(!cart){
        cartContainer.html('')
        $('#ordered-amount').text(0)
        $('#tax-amount').text(0)
        $('#total-amount').text(0)
        return
    }
    cartContainer.html('')
    cart.forEach(products=>{
        cartContainer.html((index,content)=>content+TempleteEng(cartCard,{
            id:products.id,
            image:products.photo,
            productName:products.name,
            quantity:products.quantity,
            price:products.price
        }))
    })
    order_price=(cart.map(data=> data.quantity*data.price)).reduce((a,b)=>a+b,0)
    tax_amt=((12/100)*order_price)
    tot_amt=order_price+tax_amt
    $('#ordered-amount').text(order_price)
    $('#tax-amount').text(tax_amt)
    $('#total-amount').text(tot_amt)
}

function addToCart(e){

    if(cart.find(data=>data.id==e.parentNode.id)){
        alterPopup("Item present inside cart !")
        return
    }
    console
    cart.push(findItem(e.parentNode.id))
    renderCart(cart)
}

function removeCart(e){
    cart=cart.filter(data=>{
        return data.id!=parseInt($(e).parent()[0].id)
    })
    renderCart(cart)
}


const foodCard=
                    `
                    <div class="food-card" id='<%id%>'>
                        <img class="food-image" src="<%image%>"/>
                        <div class="food-info">
                            <p class="food-name"><%foodName%></p>
                            <p class="food-type"><%foodType%></p>
                            <p class="food-price">Rs. <%foodPrice%> </p>
                        </div>
                        <button class="add-cart" id='<%id%>' onclick="addToCart(this)"><i class="fa-solid fa-cart-plus"></i>Add to cart</button>
                    </div>
                    `

const cardContainer=
    `
            <div id="card-container">
                <p><%name%></p>
                <hr/>
                <div class="card-display">
                </div>
            </div>
    `

const cartCard=
            `<div style="text-align: center; margin-bottom:10px;" id="<%id%>">
                <div class="cart-card">
                    <img src="<%image%>"/>
                    <div class="cart-product-info">
                        <p class="cart-p-name"><%productName%></p>
                        <p class="cart-p-quantity"><%quantity%></p>
                        <p class="cart-p-price">Rs <%price%></p>
                        <div class="stock-number">
                            <button id="sub-stock" onclick="alterStock(this,<%id%>)" class="plus"><i class="fa-solid fa-subtract"></i></button>
                            <button id="add-stock" onclick="alterStock(this,<%id%>)" class="subtract"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                <button class="remove-cart" onclick='removeCart(this)'>Remove cart</button>
            </div>`

const productContainer=$("#container")
category.forEach(data=>{
        productContainer.html((index,content)=>content+="\n"+TempleteEng(cardContainer,{
            name:data[0]
        }))
        data[1].forEach(data=>{
            display=document.querySelectorAll(".card-display")
            display[display.length-1].innerHTML+=TempleteEng(foodCard,{
                id:data.id,
                image:data.photo,
                foodName:data.name,
                foodType:data.type,
                id:data.id,
                foodPrice:data.price
            })
        })
})
