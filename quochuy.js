const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const huyit = [
  {
    id: 1,
    name: "SHOP BÁN VIA",
    seller: "Admin",
    price: "1000",
    description: "Code tuyệt đẹp",
    imageUrl: "https://i.imgur.com/563CZQD.jpg",
    category: "Code Via",
  },
  {
    id: 2,
    name: "CHECKSCAM",
    seller: "Admin",
    price: "1500",
    description: "Dùng Ổn",
    imageUrl: "https://i.imgur.com/Gtp0c2L.png",
    category: "Code MXH",
  },
  {
    id: 3,
    name: "API MBBANK",
    seller: "Admin",
    price: "2500",
    description: "Bao Setup Nha",
    imageUrl: "https://i.imgur.com/TQ5bq12.png",
    category: "Code MXH",
  },
  {
    id: 4,
    name: "GẠCH THẺ V2",
    seller: "Admin",
    price: "500000",
    description: "Không Key Log",
    imageUrl: "https://i.imgur.com/hMcaQT2.jpg",
    category: "Code MXH",
  },
  {
    id: 5,
    name: "CODE HOSTING WHCMS",
    seller: "Admin",
    price: "2000",
    description: "Web Bán Hosting Miền",
    imageUrl: "https://i.imgur.com/QrwXd5x.png",
    category: "Code Hosting",
  },
  {
    id: 6,
    name: "DỊCH VỤ MXH",
    seller: "Admin",
    price: "2700",
    description: " Đẹp Đơn Tay , Auto Bank",
    imageUrl: "https://i.imgur.com/8n5kX7A.png",
    category: "Code MXH",
  },
  {
    id: 7,
    name: "THIẾT KẾ WEB",
    seller: "Admin",
    price: "2500",
    description: "Đầy Đủ Mọi Chức Năng",
    imageUrl: "https://i.imgur.com/zkzTExA.png",
    category: "Shopping Cart",
  },
  {
    id: 8,
    name: "FRAMEWORK LARAVEL",
    seller: "Admin",
    price: "4700",
    description: "Đẹp Nhanh",
    imageUrl: "https://i.imgur.com/gmyYuSi.png",
    category: "Shopping Cart",
  },
  {
    id: 9,
    name: "CRON NODEJS",
    seller: "Admin",
    price: "5700",
    description: "Mượt",
    imageUrl: "https://i.imgur.com/mmWB0O1.png",
    category: "Shopping Cart",
  },
  {
    id: 10,
    name: "SHOP BÁN ACC",
    seller: "User",
    price: "6700",
    description: "Acc Game",
    imageUrl: "https://i.imgur.com/lgk63om.png",
    category: "Shopping Cart",
  },
];
// get all()
app.get("/v2/huyit", (req, res) => {
  res.status(200).json(huyit);
});
// get :id
app.get("/v2/huyit/:id", (req, res) => {
  const huydev = huyit.find((dev) => dev.id === parseInt(req.params.id));
  if (!huydev) res.status(404).send("Báo Ít Hoi Huy Đánh Giờ !");
  res.send(huydev);
});

// get :category

// app.get("/v2/huyit/:category", (req, res) => {
//   const huydev = huyit.find((dev) => dev.category === parseInt(req.params.category));
//   if (!huydev) res.status(404).send("Báo Ít Hoi Huy Đánh Giờ !");
//   res.send(huydev);
//   console.log(huydev)
// });

// Post 

app.listen("8080", () => {
  console.log("server is running");
});
