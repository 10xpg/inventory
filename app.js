require("dotenv").config();
const express = require("express");
const inventoryRouter = require("./routes/inventory");
const formRouter = require("./routes/forms");
const authRouter = require("./routes/auth");
const path = require("path");

const app = express();
const PORT = process.env.PORT;

// -> Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// -> Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// -> Routes
app.use("/", inventoryRouter);
app.use("/form", formRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT} ...`));

// // TODO 1: add eventhandler that returns a list of products specific to the Category button? like passing selected category to db query?
// // TODO 2: add form where visitors can add to inventory .ie. both category and products
// // TODO 2: and form validation & error handlers
// // TODO 4: implement update for category and products
// // TODO 3: implement delete for category and products
// // TODO 3: add way to link delete and update for products
// // TODO 3: add way to link delete and update for category
// // TODO 6: protect UPDATE and DELETE endpoints
// // TODO 7: add style to category buttons on home
