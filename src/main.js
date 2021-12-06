"use strict";

const data = [
    {
        title: "E-phone 11",
        type: "phone",
        img: "../pic/iphone-11.jpeg",
        price: [899],
        isNew: true,
    },
    {
        title: "E-phone 10",
        type: "phone",
        img: "../pic/iphone-11.jpeg",
        price: [799],
    },
    {
        title: "E-phone 8",
        type: "phone",
        img: "../pic/iphone-8.jpeg",
        price: [549, 649],
    },
    {
        title: "Galaxy s20",
        type: "phone",
        img: "../pic/galaxy-s20.jpg",
        price: [ 549, 649],
        isNew: true,
    },
    {
        title: "BlairPods",
        type: "headphone",
        img: "../pic/airpod.jpeg",
        price: [200]
    },

];


const renderData = (data) => {
    const itemList = document.querySelector(".main-products");
    for(let i=0; i<data.length; i++) {
        let item = data[i];
        const newDiv = document.createElement("div");
        newDiv.classList.add("card-product");
        const productImg = document.createElement("img");
        productImg.setAttribute('src', item.img);
        productImg.setAttribute('alt', item.type);
        productImg.classList.add("card-product--img");
        newDiv.appendChild(productImg);

        //
        if (item.isNew) {
            const newTag = document.createElement("p");
            newTag.textContent = "New";
            newTag.classList.add("text-primary");
            newDiv.appendChild(newTag);
        } else {
            const newTag = document.createElement("p");
            newTag.textContent = "Not New";
            newTag.classList.add("text-primary");
            newDiv.appendChild(newTag);
        }
        // Name
        const name = document.createElement("h5");
        name.textContent = item.title;
        newDiv.appendChild(name);

        // Prices 
        const newPriceDiv = document.createElement("div");
        newPriceDiv.classList.add("prices");
        if (item.price.length > 1) {
            //Add prices to prices div
            let oldPrice = document.createElement("p");
            oldPrice.textContent = "$" + item.price[1];
            oldPrice.classList.add("text-muted");
            
            //Create strike through
            let strike = document.createElement("strike");
            strike.classList.add("text-muted");
            strike.appendChild(oldPrice);
            newPriceDiv.appendChild(strike);

        }

        //Second item
        let price = document.createElement("p");
        price.textContent = "$" + item.price[0];
        price.classList.add("price");
        newPriceDiv.appendChild(price)

        newDiv.appendChild(newPriceDiv);
        newPriceDiv.classList.add("prices");

        const button = document.createElement("button");
        button.innerHTML = "ADD TO CART";
        button.classList.add("btn", "btn-outline-dark");
        newDiv.appendChild(button);
        itemList.appendChild(newDiv);  
        if (item.price.length > 1) {
            const saleDiv = document.querySelector(".products-on-sale");
            saleDiv.appendChild(newDiv);
        }
    }
    
    // <div class="card-product">
    //     <img src="pic/beats.jpeg" alt="" class="card-product--img">
    //     <p class="text-primary">New</p>
    //     <h5>Beatings</h5>
    //     <div class="prices">
    //         <strike class="text-muted"><p class="text-muted">$499</p></strike><p class="price">$299</p>
    //     </div>
    //     <button class="btn btn-outline-dark">ADD TO CART</button>
    // </div>
}

renderData(data);




console.log(data);