const express = require("express");

const app = express();
app.use(express.json());

app.use("/home", home);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
