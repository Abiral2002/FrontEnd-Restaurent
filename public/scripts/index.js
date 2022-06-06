let cart=[]
let category=[['Momo Category',
            [
                {
                id:1,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            },
            {
                id:2,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            },
            {
                id:3,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            },
            {
                id:4,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            },
            {
                id:5,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            }
        ]
        ],['Chicken Category',
            [
                {
                id:6,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken",
                type:"Jhol Momo",
                price:"500"
            },
            {
                id:7,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            },
            {
                id:8,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            },
            {
                id:9,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            },
            {
                id:10,
                photo:"https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
                name:"Chicken Momo",
                type:"Jhol Momo",
                price:"500"
            }
        ]
        ]]

document.querySelector("#close-cart").addEventListener('click',()=>{
    document.querySelector("#container").style.display="block"
    document.querySelector(".cart-screen").style.transform="scaleY(0)"
})

document.querySelector(".cart-icon").addEventListener('click',()=>{
    document.querySelector(".cart-screen").style.transform="scaleY(1)"
    document.querySelector("#container").style.display="none"
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



function TempleteEng(text,data)
{
    let re=/<%([^%>]+)?%>/g,match
    while(match=re.exec(text)){
        text=text.replace(match[0],data[match[1]])
    }
    return text
    
}

function sendOrder() { 
    console.log(cart)
 }


function alterStock(e,id){
    let alter=($(e)[0].id=="add-stock")?1:-1
    let index=cart.findIndex(data=>{
        return data.id==id
    })
    cart[index].quantity=cart[index].quantity+alter
    if(cart[index].quantity < 0)cart[index].quantity=0
    renderCart(cart)

}

// To re render Cart

function renderCart(cart){
    const cartContainer=$("#cart-container")
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
