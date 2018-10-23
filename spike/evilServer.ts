import express from 'express';

const app = express();

app.get("/steal", (req, res) => {
    console.log(req.query);
    res.status(404).send("not found");
    return;
});

app.listen(3001);
console.log("listening on localhost:3001");
