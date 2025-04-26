// import regeneratorRuntime from "regenerator-runtime";
// import Client from 'shopify-buy';

// var $ = require("jquery");
// window.jQuery = $;
// window.$ = $;
// let checkoutId = "";

// const shopClient = Client.buildClient({
//         storefrontAccessToken: 'eaa66af648956aa6606592de12358958',
//         domain: 'devmukeshcgs.myshopify.com',
//     })
//     // console.log("CLIENT------------------------------>", shopClient);
// async function asyncCall() {
//     console.log('calling');
//     const products = await shopClient.product.fetchAll();
//     // console.log(products);
//     if (products.length > 0) {
//         buildProducts(products)
//     }
// }

// // CREATE CHECKOUT
// // Create an empty checkout
// shopClient.checkout.create().then((checkout) => {
//     // Do something with the checkout
//     console.log("CHECKOUT", checkout);
//     if (!window.localStorage.checkOut) {
//         //console.log("LOG ----- Local Storage", window.localStorage.checkOut);
//     }
//     checkoutId = checkout.id
// });

// var buildProducts = (products) => {
//     products.forEach((product, index) => {
//         console.log("PRODUCT-----------------", product);
//         let CARD = `<div class="product-card">
//         <div class="holder">
//             <div class="img-holder">
//                 <img src="${product.images[0].src}" alt="" />
//             </div>
//             <div class="title">${product.attrs.title}</div>
//             <div class="cta">
//                 <div class="price"><span>${product.attrs.variants[0].priceV2.currencyCode}</span>:  ${product.attrs.variants[0].price}</div>
//                 <button class="btn btn-primary add-to-cart" data-variant-id="${product.attrs.variants[0].id}" data-id="product_${product.id}">Add to Cart</button>
//             </div>
//         </div>
//     </div>`
//         let CARD_GRID = `<div class="box box-$" style="background-image:url('${product.images[0].src}')">
//         <div class="title"> ${product.attrs.title}</div>
//         <button class="btn btn-primary add-to-cart" data-variant-id="${product.attrs.variants[0].id}" data-id="product_${product.id}">Add to Cart</button>
//     </div>`

//         // productContainer.append(title, img, price, btn)
//         // $('#products').append(productContainer);
//         $('.i-phone-grid').append(CARD_GRID)
//         $('#product-list').append(CARD)
//     })
// }

// var buildCartView = (cart_items) => {
//     $('#item-list').html("")
//     cart_items.forEach((cart_item) => {
//         console.log("CART----------------------", cart_item);
//         let CART_CARD = `<li>
//         <div class="img">
//             <img src="${cart_item.attrs.variant.image.src}" width="80" alt="">
//         </div>
//         <div class="details">
//             <div class="title">${cart_item.attrs.title}</div>
//             <div class="Price"><span>${cart_item.attrs.variant.priceV2.currencyCode}</span> : <span>${cart_item.attrs.variant.price}</span> </div>
//         </div>
//         <div class="cta">
//             <button class="btn btn-primary btn-sm remove-from-cart" data-item-id="${cart_item.attrs.id}" data-id="product_">Remove</button>
//         </div>
//     </li>`
//         $('#item-list').append(CART_CARD)
//     })
//     checkout_data()
// }

// // CHECKOUT, TAX, TOTAL
// var checkout_data = () => {
//     shopClient.checkout.fetch(checkoutId).then((checkout) => {
//         // Do something with the checkout
//         console.log("UPDATED", checkout, checkout.subtotalPrice, checkout.totalPrice, checkout.totalTax);
//         $("#subtotal").text(checkout.subtotalPrice)
//         $("#taxes").text(checkout.totalTax)
//         $("#total").text(checkout.totalPrice)
//     });
// }

// asyncCall();

// function openCartSlider() {
//     $(".cart-slider").show();
// }

// function colseCartSlider() {
$(".cart-slider").hide();
// }
// $(function() {

//     console.log("NOSJDOSHDOSHDOSH", $('#item-list').is(':empty'));
//     if ($('#item-list').is(':empty')) {
//         colseCartSlider();
//     }
//     if (!$('#item-list').is(':empty')) {
//         colseCartSlider();
//     }

// })




// $("body").on("click", ".add-to-cart", function(e) {

//     if ($('#item-list').is(':empty')) {
//         colseCartSlider();
//     } else {
//         openCartSlider();
//     }

//     let VARIANT_ID = $(this).attr("data-variant-id");

//     const lineItemsToAdd = [{
//         variantId: VARIANT_ID,
//         quantity: 1,
//         customAttributes: [{
//             key: "MyKey",
//             value: "MyValue"
//         }]
//     }];

//     // Add an item to the checkout
//     shopClient.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
//         // Do something with the updated checkout
//         console.log(checkout.lineItems); // Array with one additional line item
//         buildCartView(checkout.lineItems)
//     });
// });

// // REMOVE
// $("body").on("click", ".remove-from-cart", function(e) {
//     let ITEM_ID = $(this).attr("data-item-id");
//     // Remove an item from the checkout
//     shopClient.checkout.removeLineItems(checkoutId, ITEM_ID).then((checkout) => {
//         // Do something with the updated checkout
//         console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed
//         buildCartView(checkout.lineItems)
//     });

// })

// // CART
// function updateCart(lineItems) {}