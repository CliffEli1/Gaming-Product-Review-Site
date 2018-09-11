var rnams = []
var rquan = []
var rpric = []

function addToCart(){
	rnams.push(document.getElementById("pnam").value);
	rquan.push(parseInt(document.getElementById("quan").value));
	rpric.push(parseInt(document.getElementById("pprice").value));

	displayCart();
}
function displayCart(){

	var cartstuff = '<table><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';

    var total = 0;

    for (var i = 0; i < rnams.length; i++) {
    	total += rquan[i] * rpric[i]
    	cartstuff += "<tr><td>" + rnams[i] + "</td><td>" +
    	rquan[i] + "</td><td>" + rpric[i] + "</td><td>" +
    	rquan[i] * rpric[i] + "</td><td><button onclick='delElement(\" + i +\")'>Delete</button></td></tr>"
    }
    
    cartstuff += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>';

    document.getElementById('cart').innerHTML = cartstuff;
}

function delElement(a){
	rnams.splice(a, 1);
	rquan.splice(a, 1);
	rpric.splice(a, 1);
	displayCart()
}