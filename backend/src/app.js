import express from 'express';
const app = express();

app.get("/api/note", (req, res) => {
    res.status(200).send("You got five(5) notes")
})

app.get("/api/fast", (req, res) => {
    fetch("https://www.tdiinternational.com/technical-source-product-info/conversion-charts-ounces-pounds").then((response) => {
        response.text().then((data) => {
            res.status(201).send(data)
        })
    })
})