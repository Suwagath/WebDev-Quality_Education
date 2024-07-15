document.addEventListener('DOMContentLoaded', ready);
let cartIcon=document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let exitCart=document.querySelector("#exit-cart");

cartIcon.onclick=()=>{
    cart.classList.add("active");
}

exitCart.onclick=()=>{
    cart.classList.remove("active");
}


/* if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
} */


function ready(){
    var removeCartButton=document.getElementsByClassName("cart-remove");
    console.log(removeCartButton);
    for (var i=0;i<removeCartButton.length;i++){
        var button=removeCartButton[i];
        button.addEventListener('click',removeCartItem);
    }


    var quantityEntry=document.getElementsByClassName("cart-quantity");
    for (var i=0;i<quantityEntry.length;i++){
        var input=quantityEntry[i];
        input.addEventListener('change',quantityChanged);
    }


    var addCart=document.getElementsByClassName("addcart");
    for (var i=0;i<addCart.length;i++){
        var button=addCart[i];
        button.addEventListener('click',addCartClicked);
    }
    document.getElementsByClassName("buy-now")[0].addEventListener("click",buyButtonClicked);
}

function buyButtonClicked(event){
    var cartContent=document.getElementsByClassName("cart-content")[0];
    if(cartContent.innerHTML.trim() === "" || !cartContent.hasChildNodes()){
        alert("The Cart is empty.Please select item(s) to place order");
        return;
    }
        var cartIMG=cartContent.getElementsByClassName("cart-img");
        var cartLists=cartContent.getElementsByClassName("detail-box");
        for(var i=0;i<cartLists.length;i++){
            var cartList=cartLists[i];
            var stockImg=cartIMG[i];
            var stockName=cartList.getElementsByClassName("cart-product-title")[0].innerText;
            var stockquantity=cartList.getElementsByClassName("cart-quantity")[0].value;
            var stockprice=cartList.getElementsByClassName("cart-price")[0].innerText;

            localStorage.setItem("stockImg"+i,stockImg);
            localStorage.setItem("stockName"+i,stockName);
            localStorage.setItem("stockquantity"+i,stockquantity);
            localStorage.setItem("stockprice"+i,stockprice);
        }
        localStorage.setItem('cartcount',cartLists.length);
        window.location.href="Order.html";
        while (cartContent.hasChildNodes()){
            cartContent.removeChild(cartContent.firstChild);
        }
        updateTotal();

        ready();
    
}



function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}



function quantityChanged(event){
    var input=event.target;
    if(isNaN(input.value)||input.value<=0){
        input.value=1;
    }
    updateTotal();
}


//Add to cart
function addCartClicked(event){
    var button=event.target;
    var shopProducts=button.parentElement;
    var productName = shopProducts.getElementsByClassName("itemName")[0].innerText;
    var productPrice = shopProducts.getElementsByClassName("itemPrice")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("itemImg")[0].src;
    addProductToCart(productName,productPrice,productImg);
    updateTotal();
}

function addProductToCart(productName,productPrice,productImg){
    var cartShopBox=document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText==productName){
            alert("You have already add this to cart");
            return;
        }
    }
    var cartBoxContent = `<img src="${productImg}" alt="Neon" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${productName}</div>
                            <div class="cart-price">${productPrice}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class='bx bxs-trash-alt cart-remove'></i>`;

    cartShopBox.innerHTML=cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener('click',removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener('change',quantityChanged);
}

function updateTotal(){
    var cartContent=document.getElementsByClassName("cart-content")[0];
    var cartBoxes=cartContent.getElementsByClassName("cart-box");
    var total=0;
    for (var i=0;i<cartBoxes.length;i++){
        var cartBox=cartBoxes[i];
        var priceAmount=cartBox.getElementsByClassName("cart-price")[0];
        var quantityAmount=cartBox.getElementsByClassName("cart-quantity")[0];
        var price=parseFloat(priceAmount.innerText.replace("$",""));
        var quantity=quantityAmount.value;    
        total=total+(price*quantity);
    }
        document.getElementsByClassName("total-price")[0].innerText="$"+total;
}