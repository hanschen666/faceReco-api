const handleDelete = (req, res, db) => {
  const { id } = req.body;
  db("users")
    .where("id", id)
    .del()
    .then(() => console.log)
    .catch(err => console.log("cannot delete"));
};

export const remove = handleDelete;
