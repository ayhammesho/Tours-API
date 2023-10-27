const fs = require("fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: "fail",
    body: "there is no specified route for this request",
  });

  // res.status(200).json({
  //   status: "success",
  //   results: users.length,
  //   requestedAt: req.requestedTime,
  //   data: { users },
  // });
};

exports.addNewUser = (req, res) => {
  res.status(500).json({
    status: "fail",
    body: "there is no specified route for this request",
  });

  // const newId = users[users.length - 1].id + 1;
  // console.log(newId);
  // const newUser = Object.assign({ id: newId }, req.body);

  // users.push(newUser);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/users.json`,
  //   JSON.stringify(users),
  //   (err) => {
  //     res.status(201).json({
  //       status: "success",
  //       data: {
  //         user: newUser,
  //       },
  //     });
  //   }
  // );
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: "fail",
    body: "there is no specified route for this request",
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "fail",
    body: "there is no specified route for this request",
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "fail",
    body: "there is no specified route for this request",
  });
};
