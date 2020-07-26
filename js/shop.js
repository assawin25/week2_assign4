var customername="Assawin";
var products = ["Pizza","Naan","Sourdough","Foccacia","iPhone X"];
var price = [40,10,20,80,1000];
var quantity =[1,1,1,1,1];
var promotion = .25;
var greeting = "";
var time = new Date().getHours();
if (time<12) {
greeting("Good morning");
} 
else (time<18) {
greeting("Good afternoon");
}
else {
greeting("Good evening");
}
document.getElementById('greeting').innerHTML=greeting;

var i;
var total_price=0;
var productsText="";
var productsElement = document.getElementById('product-list');
for(i = 0;i<products.length;i++){

	productsText = productsText + "<li class='list-group-item'>";
	productsElement.innerHTML = productsText;
	total_price = price[i] * quantity[i];
}


document.getElementById("customer-name").innerHTML=customername;
document.getElementById("price").innerHTML= '$' +totalprice=(1-promotion)
document.getElementById("greeting").innerHTML=greeting;











var  productsText="";

productsText = productsText + "<li class='list-group-item'>" + products[0] + "<span class='badge badge-danger float-right'>10$" + price[0] + "</li>";
productsElement.innerHTML = productsText;

