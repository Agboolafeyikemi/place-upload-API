const HttpError = require("../modal/error");

let DUMMY__USER = [
  {
    id: "u1",
    name: "Ogunsanya Ibukun",
    address: "No 1 Kode Street Maryland",
  },
  {
    id: "u3",
    name: "Ogunsanya Feyikemi",
    address: "No 1 Kode Street Maryland",
  },
];

const getuserById = (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY__USER.find((user) => user.id === userId);
  console.log("user", user);
  if (!user) {
    throw new HttpError("Could not found a user of this Id", 404);
  }

  res.json({ user });
};

const getAllUsers = (req, res, next) => {
  if (DUMMY__USER.length === 0) {
    throw new HttpError("No user exit, please create a user!");
  }
  res.json({ DUMMY__USER });
};

const createUser = (req, res, next) => {
  const { name, id, address } = req.body;
  const createdUser = { name, id, address };
  DUMMY__USER.push(createdUser);
  res.status(201).json({ message: "User created successful!" });
};

const editUser = (req, res, next) => {
  const userId = req.params.uid;

  const { name, address } = req.body;

  const updatedUserIndex = DUMMY__USER.findIndex(user.id === userId);

  const updatedUser = { ...DUMMY__USER.find(user.id === userId) };
  console.log("feyikemi");
  updatedUser.address = address;

  updatedUser.name = name;

  DUMMY__USER[updatedUserIndex] = updatedUser;

  res.status(201).json({ DUMMY__USER });
};

exports.getuserById = getuserById;
exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.editUser = editUser;
