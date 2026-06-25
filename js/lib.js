const products = [

    // ===== VỢT CẦU LÔNG =====
    {
        id: 1,
        name: "Yonex Astrox 100ZZ",
        price: 5500000,
        image:"../assets/images/8.jpg",
        description: "Yonex Astrox 100ZZ là dòng vợt thiên công đỉnh cao, nổi tiếng với các cú đập (smash) uy lực và độ cắm cầu cao. Đây là lựa chọn lý tưởng cho người chơi có trình độ từ khá, giỏi trở lên, sở hữu lực cổ tay khỏe và yêu thích lối đánh áp đảo.",

        category: "Vợt cầu lông"
    },

    {
        id: 2,
        name: "Yonex Nanoflare 1000Z",
        price: 5300000,
         image: "../assets/images/9.jpg",
        description: "Yonex Nanoflare 1000Z là dòng vợt thiên công đỉnh cao, nổi tiếng với các cú đập (smash) uy lực và độ cắm cầu cao. Đây là lựa chọn lý tưởng cho người chơi có trình độ từ khá, giỏi trở lên, sở hữu lực cổ tay khỏe và yêu thích lối đánh áp đảo.",

        category: "Vợt cầu lông"
    },

    {
        id: 3,
        name: "Lining Aeronaut 9000C",
        price: 4200000,
        image: "../assets/images/6.jpg",
        description: "Là dòng vợt cao cấp ra mắt tháng 6/2023, nổi bật với thiết kế siêu nhẹ, thiên về tốc độ, lối đánh nhanh và linh hoạt. Đây là lựa chọn lý tưởng cho đánh lưới và phản tạt, được sử dụng bởi nhiều tay vợt hàng đầu thế giới.",

        category: "Vợt cầu lông"
    },

    {
        id: 4,
        name: "Lining 3D Calibar 900",
        price: 3900000,
        image: "../assets/images/5.jpg",
        description: "Là dòng vợt thiên công đỉnh cao, nổi tiếng với các cú đập (smash) uy lực và độ cắm cầu cao. Đây là lựa chọn lý tưởng cho người chơi có trình độ từ khá, giỏi trở lên, sở hữu lực cổ tay khỏe và yêu thích lối đánh áp đảo.",
        category: "Vợt cầu lông"
    },

    {
        id: 5,
        name: "Victor Thruster K Falcon",
        price: 4500000,
        image:"../assets/images/victor.webp",
        description: "Là dòng vợt thiên công đỉnh cao, nổi tiếng với các cú đập (smash) uy lực và độ cắm cầu cao. Đây là lựa chọn lý tưởng cho người chơi có trình độ từ khá, giỏi trở lên, sở hữu lực cổ tay khỏe và yêu thích lối đánh áp đảo.",

        category: "Vợt cầu lông"
    },

    {
        id: 6,
        name: "Victor DriveX 10",
        price: 4100000,
        image: "../assets/images/1.jpg",
        description: "Là dòng vợt thiên công đỉnh cao, nổi tiếng với các cú đập (smash) uy lực và độ cắm cầu cao. Đây là lựa chọn lý tưởng cho người chơi có trình độ từ khá, giỏi trở lên, sở hữu lực cổ tay khỏe và yêu thích lối đánh áp đảo.",

        category: "Vợt cầu lông"
    },

    {
        id: 7,
        name: "Mizuno Fortius 11 Power",
        price: 3500000,
        image: "../assets/images/2.jpg",
        description: "Phù hợp đánh đơn và tấn công.",
        category: "Vợt cầu lông"
    },

    {
        id: 8,
        name: "Apacs Z-Ziggler",
        price: 1800000,
        image: "../assets/images/3.jpg",
        description: "Hiệu năng tốt trong tầm giá.",
        category: "Vợt cầu lông"
    },

    {
        id: 9,
        name: "Kawasaki Honor S6",
        price: 2200000,
        image: "../assets/images/4.jpg",
        description: "Dễ chơi, phù hợp người mới.",
        category: "Vợt cầu lông"
    },

    {
        id: 10,
        name: "Yonex Arcsaber 11 Pro",
        price: 5000000,
        image: "../assets/images/5.jpg",
        description: "Kiểm soát và điều cầu xuất sắc.",
        category: "Vợt cầu lông"
    },

    {
        id: 11,
        name: "Lining Tectonic 7",
        price: 2800000,
        image: "../assets/images/1.jpg",
        description: "Linh hoạt trong mọi tình huống.",
        category: "Vợt cầu lông"
    },

    {
        id: 12,
        name: "Victor Auraspeed 90K",
        price: 4300000,
        image: "../assets/images/7.jpg",
        description: "Tốc độ cực nhanh, phản tạt tốt.",
        category: "Vợt cầu lông"
    },

    // ===== TÚI VỢT =====
    {
        id: 13,
        name: "Túi Yonex Pro Tournament",
        price: 1200000,
        image: "../assets/images/a.jpg",
        description: "Túi đựng 6 vợt chuyên nghiệp.",
        category: "Túi đựng vợt"
    },

    {
        id: 14,
        name: "Túi Lining ABJS019",
        price: 950000,
        image: "../assets/images/b.jpg",
        description: "Thiết kế hiện đại, chống thấm.",
        category: "Túi đựng vợt"
    },

    // ===== DÂY CƯỚC =====
    {
        id: 15,
        name: "Yonex BG66 Ultimax",
        price: 250000,
        image: "../assets/images/c.jpg",
        description: "Âm thanh nổ cầu cực hay.",
        category: "Dây cước"
    },

    {
        id: 16,
        name: "Yonex BG80",
        price: 220000,
        image: "../assets/images/d.png",
        description: "Độ bền và trợ lực cao.",
        category: "Dây cước"
    },

    // ===== QUẤN CÁN =====
    {
        id: 17,
        name: "Quấn cán Yonex AC102",
        price: 35000,
        image: "../assets/images/s.jpg",
        description: "Thấm hút mồ hôi tốt.",
        category: "Quấn cán"
    },

    {
        id: 18,
        name: "Quấn cán Victor GR233",
        price: 40000,
        image: "../assets/images/f.jpg",
        description: "Êm tay, chống trượt.",
        category: "Quấn cán"
    },

    // ===== GIÀY =====
    {
        id: 19,
        name: "Yonex SHB 65Z3",
        price: 2800000,
        image: "../assets/images/g.jpg",
        description: "Giày thi đấu cao cấp.",
        category: "Giày cầu lông"
    },

    {
        id: 20,
        name: "Victor A970 ACE",
        price: 2500000,
        image: "../assets/images/h.jpg",
        description: "Bám sân và ổn định.",
        category: "Giày cầu lông"
    },

    // ===== QUẦN ÁO =====
    {
        id: 21,
        name: "Áo Yonex Tournament",
        price: 350000,
        image: "../assets/images/a12.jpg",
        description: "Thoáng khí, thấm hút mồ hôi.",
        category: "Quần áo"
    },

    {
        id: 22,
        name: "Quần cầu lông Lining",
        price: 250000,
        image: "../assets/images/q12.jpg",
        description: "Co giãn tốt khi vận động.",
        category: "Quần áo"
    },

    // ===== ỐNG CẦU =====
    {
        id: 23,
        name: "Ống cầu Yonex AS30",
        price: 850000,
        image: "../assets/images/c12.jpg",
        description: "12 quả cầu lông chất lượng cao.",
        category: "Ống cầu"
    },

    {
        id: 24,
        name: "Ống cầu Hải Yến S90",
        price: 320000,
        image: "../assets/images/c123.jpg",
        description: "Phù hợp tập luyện và thi đấu.",
        category: "Ống cầu"
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

    if(cart.length === 0){

        alert("Giỏ hàng đang trống!");
        return;
    }

    document.getElementById("checkoutModal")
    .style.display = "block";
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


function filterProducts(){

    let category =
    document.getElementById("categoryFilter").value;

    let sort =
    document.getElementById("sortPrice").value;

    let result = [...products];

    if(category !== "all"){

        result = result.filter(
            p => p.category === category
        );
    }

    if(sort === "asc"){

        result.sort(
            (a,b)=>a.price-b.price
        );
    }

    if(sort === "desc"){

        result.sort(
            (a,b)=>b.price-a.price
        );
    }

    loadProducts(result);
}


function closeCheckout(){

    document.getElementById("checkoutModal")
    .style.display = "none";
}

function confirmOrder(){

    let name =
    document.getElementById("customerName").value;

    let phone =
    document.getElementById("customerPhone").value;

    let address =
    document.getElementById("customerAddress").value;

    if(
        name === "" ||
        phone === "" ||
        address === ""
    ){

        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    alert(
        "Đặt hàng thành công!\n\n" +
        "Khách hàng: " + name +
        "\nSĐT: " + phone +
        "\nĐịa chỉ: " + address
    );

    cart = [];

    document.getElementById("cart-count")
    .innerHTML = 0;

    closeCheckout();
    closeCart();
}