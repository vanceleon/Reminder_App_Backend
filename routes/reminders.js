const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();


router.get('/all', async (req, res) => {
  try {
    const reminders = await Promise.all(
      reminders.map(async user => {
        // mapping over users
        const allergies = await db('allergies') // adding allergies to mapped user
          .join('users-allergies', 'allergies.id', 'users-allergies.allergy_id')
          .join('users', 'users.id', 'users-allergies.user_id')
          .where({ 'users.id': user.id })
          .select('allergies.name');
        const recipes = await db('recipes') // adding recipes to mapped user
          .where({ user_id: user.id })
          .select('id', 'name', 'description');
        return { ...user, allergies: allergies, recipes: recipes };
      })
    );
    console.log(usersPlus);
    res.status(200).json(usersPlus);
  } catch (err) {
    res.status(500).json({ message: 'Users could not be retrieved.' });
  }
});