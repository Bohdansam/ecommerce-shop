const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(cors());

const products = {
  phones: [
    { id: 1, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: 900, image: 'https://i.imgur.com/tkd2aCq.png' },
    { id: 2, name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black', price: 1799, image: 'https://i.imgur.com/vUJB0Sq.png' },
    { id: 3, name: 'Apple iPhone 14 Pro 256GB Silver (MQ103)', price: 1399, image: 'https://i.imgur.com/Iuq79xr.png' },
    { id: 4, name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)', price: 1437, image: 'https://i.imgur.com/UCbVKAv.png' },
  ],
  headphones: [
    { id: 5, name: 'AirPods Max Silver Starlight Aluminium', price: 549, image: 'https://i.imgur.com/AFstKHR.png' },
    { id: 6, name: 'Galaxy Buds FE Graphite', price: 99.99, image: 'https://i.imgur.com/QhDcJzA.png' },
  ],
  watches: [
    { id: 7, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium', price: 399, image: 'https://i.imgur.com/fE8maoL.png' },
    { id: 8, name: 'Samsung Galaxy Watch6 Classic 47mm Black', price: 369, image: 'https://i.imgur.com/rMyYnOr.png' },
  ],
  tablets: [
    { id: 9, name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021', price: 398, image: 'https://i.imgur.com/tYhl29s.png' },
  ],
};

app.get('/api/:category', (req, res) => {
  const category = req.params.category;
  res.json(products[category] || []);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
