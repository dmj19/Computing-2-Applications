import express from "express";

const port = 8080;
const app = express();

app.use("/", express.static("web_game/static"));

// app.use("/", express.json());
// app.post("/", function (req, res) {
//     const requestObject = req.body;
//     res.json({
//         "message": requestObject.message,
//         "reply": Reverse.reverse(requestObject.message)
//     });
// });


app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});

