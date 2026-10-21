// Get all users
export const getUsers = (req, res) => {
  res.status(200).json({ message: 'Get all users' });
};

// Get user by ID
export const getUserById = (req, res) => {
  res.status(200).json({ message: `Get user ${req.params.id}` });
};
