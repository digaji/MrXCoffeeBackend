const express = require("express");

const app = express();

// Configuration
app.use(express.json());

// Login endpoint
app.post("/login", async (req, res) => {
  // Get request data from req and validate using validation function
  // const { error } = loginValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;
  // Check if user exists in database
  // if (!userExists) return res.status(400).send("User not found");
  const realEmail = "wow@binus.ac.id";

  // Check if password is correct in the database
  // if (!validPassword) return res.status(400).send("Invalid password");
  const realPassword = "yesyesyes";

  if (email === realEmail && password === realPassword)
    return res.status(200).send("Login success!");
});

// Register endpoint
app.post("/register", async (req, res) => {
  let users = [];
  // Get request data from req and validate using validation function
  // const { error } = registerValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;
  // Check if user exists in database
  // if (!userExists) return res.status(400).send("User not found");
  const existingEmail = "wow@binus.ac.id";

  if (email === existingEmail) {
    return res.status(400).send("User already exists");
  } else {
    // Do adding new user to the database
    // const userId = await UserService.createUser(email, password);
    users.push(email);
    return res.status(200).send("Register success!");
  }
});

// Show menu endpoint
app.get("/menu", async (req, res) => {
  // Realistically, you would await for a response from the database, but this is just an example
  // In MongoDB
  // const collection = client.db("MrXDatabase").collection("menuItems");
  // const cursor = collection.find( {menu: menu} );
  // const menuItems = await cursor.toArray();
  const menuItems = ["Cappuccino", "Latte", "Macchiato", "Matcha Latte"];

  return res.status(200).json(menuItems);
});

// Listen on injected port, else 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Application listening at http://localhost:${PORT}`)
);
