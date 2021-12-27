const handleDelete = (req, res, db) => {
  const { id } = req.body;
  db("users")
    .where("id", id)
    .del()
    .then(() => res.json("success delete (users)"))
    .catch((err) => console.log("cannot delete"));

  db("login")
    .where("id", id)
    .del()
    .then(() => res.json("success delete (login)"))
    .catch((err) => console.log("cannot delete"));
};

export const remove = handleDelete;
