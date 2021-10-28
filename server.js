const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
app.use(express.json());

// Create a new user account
app.post("/user", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});
// app.post("/echo", (req, res) => {
//   res.json(req.body);
// });

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
