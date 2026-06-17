const products = [

{
    id:1,
    name:"Yonex Astrox 99 Pro",
    price:5490000,
    description:"Yonex Astrox 99 Pro là dòng vợt thiên công đỉnh cao, nổi tiếng với các cú đập (smash) uy lực và độ cắm cầu cao. Đây là lựa chọn lý tưởng cho người chơi có trình độ từ khá, giỏi trở lên, sở hữu lực cổ tay khỏe và yêu thích lối đánh áp đảo.",
    image:"../assets/images/astrox99.jpg"
},

{
    id:2,
    name:"Yonex Nanoflare 1000Z",
    price:6200000,
    description:"Yonex Nanoflare 1000Z là dòng vợt cao cấp ra mắt tháng 6/2023, nổi bật với thiết kế siêu nhẹ, thiên về tốc độ, lối đánh nhanh và linh hoạt. Đây là lựa chọn lý tưởng cho đánh lưới và phản tạt, được sử dụng bởi nhiều tay vợt hàng đầu thế giới.",
    image:"../assets/images/nanoflare1000z.webp"  
},

{
    id:3,
    name:"Victor Thruster K Falcon",
    price:5100000,
    description:"Victor Thruster K Falcon (thường gọi tắt là TK-F) là một trong những dòng vợt tấn công cao cấp nhất của Victor, nổi tiếng nhờ sự kết hợp hoàn hảo giữa tốc độ, độ chính xác và sức mạnh. Dòng vợt này được thiết kế dành riêng cho lối chơi toàn diện thiên công, được rất nhiều tay vợt chuyên nghiệp thế giới như Hendra Setiawan và Tai Tzu Ying sử dụng.",
    image:"../assets/images/victor.webp"
},

{
    id:4,
    name:"Lining Aeronaut 9000",
    price:4800000,
    description:"Li-Ning Aeronaut 9000 là dòng vợt cầu lông cao cấp, nổi bật với 4 rãnh thoát khí ở khung giúp giảm tối đa lực cản không khí. Đây là cây vợt thiên công, nổi tiếng với độ linh hoạt cao, chuyên dùng cho các pha đập cầu tốc độ và uy lực.",
    image:"../assets/images/llining.webp"
}
];

let cart=[];

function formatPrice(price){

    return price.toLocaleString("vi-VN");
}

function createItem(product){

    const list =
    document.getElementById("product-list");

    const item =
    document.createElement("div");

    item.className="item";

    item.innerHTML=`

        <img src="${product.image}">

        <div class="info">

            <h3>${product.name}</h3>

            <p class="price">
                ${formatPrice(product.price)} VNĐ
            </p>

            <p>${product.description}</p>

            <button
            class="detail-btn"
            onclick="showDetail(${product.id})">

            Xem chi tiết

            </button>

            <button onclick="addToCart(${product.id})">

            🛒 Thêm vào giỏ

            </button>

        </div>
    `;

    list.appendChild(item);
}

function loadProducts(arr){

    const list=
    document.getElementById("product-list");

    list.innerHTML="";

    arr.forEach(product=>{
        createItem(product);
    });
}

function showDetail(id){

    const p=
    products.find(x=>x.id===id);

    document.getElementById("detailImage")
    .src=p.image;
document.getElementById("detailName")
    .innerHTML=p.name;

    document.getElementById("detailPrice")
    .innerHTML=
    formatPrice(p.price)+" VNĐ";

    document.getElementById("detailDescription")
    .innerHTML=p.description;

    document.getElementById("detailModal")
    .style.display="block";
}

function closeDetail(){

    document.getElementById("detailModal")
    .style.display="none";
}

function addToCart(id){

    const product=
    products.find(x=>x.id===id);

    cart.push(product);

    document.getElementById("cart-count")
    .innerHTML=cart.length;
}

function showCart(){

    let html="";
    let total=0;

    cart.forEach(item=>{

        html+=`
        <li>
            ${item.name}
            -
            ${formatPrice(item.price)} VNĐ
        </li>
        `;

        total+=item.price;
    });

    document.getElementById("cart-items")
    .innerHTML=html;

    document.getElementById("total-price")
    .innerHTML=formatPrice(total);

    document.getElementById("cartModal")
    .style.display="block";
}

function closeCart(){

    document.getElementById("cartModal")
    .style.display="none";
}

function checkout(){

    if(cart.length===0){

        alert("Giỏ hàng đang trống!");

        return;
    }

    alert(
    "Thanh toán thành công!\nCảm ơn bạn đã mua hàng."
    );

    cart=[];

    document.getElementById("cart-count")
    .innerHTML=0;

    closeCart();
}

function searchProduct(){

    let keyword=
    document.getElementById("search")
    .value
    .toLowerCase();

    let result=
    products.filter(product=>

    product.name
    .toLowerCase()
    .includes(keyword));

    loadProducts(result);
}

window.onload=function(){

    loadProducts(products);
}