import express from 'express';
import cookieSession from "cookie-session";

const app = express();


app.set('trust proxy', 1); // trust first proxy

const cookieName = 'other';
app.use(cookieSession({
    name: cookieName,
    keys: [/* secret keys */"my private key"],

    httpOnly: false, // turned off for testing purpose - would be stolen by the xsrf attack

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.get("/", (req, res, next) => {
    console.log(req[cookieName]);
    req[cookieName].views = (req[cookieName].views || 0) + 1;
    // res.send("hello world!");
    next();
    return;
});

app.use(express.static('public'));

app.listen(3000);
console.log("listening on localhost:3000");
