import express from 'express';
import bcrypt from 'bcrypt';

import { User } from '../db/models';
// import authCheck from '../middlewares/authCheck';

const route = express.Router();

route.post('/registration', async (req, res) => {
  const { name, password } = req.body;
  try {
    const currUser = await User.findOne({ where: { name } });
    if (!currUser) {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, password: hashPassword });
      req.session.userSession = { name: newUser.name };
      return res.json({ name: newUser.name });
    }
    res.status(400).json({ message: 'Такой name уже занят' });
  } catch (err) {
    console.error(err);
  }
});

route.post('/auth', async (req, res) => {
  const { name, password } = req.body;
  try {
    const currUser = await User.findOne({ where: { name } });
    if (currUser) {
      const comparePassword = await bcrypt.compare(password, currUser.password);
      if (comparePassword) {
        req.session.userSession = { name: currUser.name };
        return res.json({ name: currUser.name });
      }
    }
    res.status(400).json({ message: 'name or password uncorrected' });
  } catch (err) {
    console.error(err);
  }
});

route.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

export default route;
