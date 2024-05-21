import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint do zapisywania danych
app.post('/data', (req, res) => {
    const data = req.body;
    // Logika zapisywania danych (np. zapis do pliku lub bazy danych)
    console.log(data);
    res.status(201).send('Data saved');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});