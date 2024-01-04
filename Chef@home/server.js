const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 5000;

// Setup mongoose
const db = mongoose.connect(uri, {
	use,
});

app.get("/", (req, res) => {
	res.json({ msg: "Hello" });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
