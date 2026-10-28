// server.js - Mashiinka Backend-ka ee Suuqa Online-ka ah
const express = require('express');
const app = express();

app.use(express.json());

// Bogga hore ee tijaabada
app.get('/', (req, res) => {
    res.json({ message: "Ku soo dhowow Suuqaaga Caalamiga ah ee la midka ah Alibaba!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server-ka suuqa wuxuu ka shaqaynayaa port-ka ${PORT}`);
});
