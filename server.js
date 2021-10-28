const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const TodoList = require("./models").todoList;
app.use(express.json());

//find the user  ✗ http -v GET :4000/users/3
app.get("/users/:userId", async (req, res) => {
  // const params = req.params;
  // console.log("the params", params); ***this way you can se from where it comming**

  const userId = parseInt(req.params.userId);
  const user = await User.findByPk(userId);
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

// Create a new user account    http -v POST :4000/users email=teste@ name=newuser
app.post("/users", async (req, res, next) => {
  try {
    // const body = req.body;
    // console.log("the req body", body);**** to see from where it is comming**
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

//change the information http -v PUT :4000/users/2 email=mamae@mamame name=bino
app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

// user lists http -v GET :4000/users/3/lists
app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    // console.log(userId); *** find the error***
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    // console.log(user); ***consolelog to find the error was a uppercase in todolist***
    if (user) {
      res.send(user.todoLists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

//create a new list http -v POST :4000/users/2/lists name=eugenio
app.post("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      const newList = await TodoList.create({ userId, ...req.body });
      res.json(newList);
    }
  } catch (e) {
    next(e);
  }
});

// Update an existing list http -v PUT :4000/users/userId/lists/7 name=teste

// /users/19/lists/2
app.put("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    console.log(listId);
    const toUpdate = await TodoList.findByPk(listId);
    console.log(toUpdate);
    if (!toUpdate) {
      res.status(404).send("List not found");
    } else {
      const updated = await toUpdate.update(req.body);
      res.json(updated);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
