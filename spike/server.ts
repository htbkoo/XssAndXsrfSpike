import express from 'express';

const app = express();

app.use(express.static('public'));
app.get("/", (req, res) => res.send("hello world!"));
app.get("/steal", (req) => console.log(req.query));


app.listen(3000);
console.log("listening on localhost:3000");
