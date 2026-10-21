import express from 'express';

const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all users' });
});

// GET a user by ID
router.get('/:id', (req, res) => {
  res.status(200).json({ message: `Get user ${req.params.id}` });
});

export default router;
