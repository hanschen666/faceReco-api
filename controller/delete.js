const handleDelete = (req, res, db) => {
  const { id } = req.body;
  db("login").where("id", id).del();
  db("users").where("id", id).del();
};

export const remove = handleDelete;
