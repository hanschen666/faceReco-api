const handleDelete = (req, res, db) => {
  const { id } = req.body;
  db("users")
    .where("id", id)
    .del()
    .then(() => res.json("success"))
    .catch((err) => console.log("cannot delete"));
};

export const remove = handleDelete;
