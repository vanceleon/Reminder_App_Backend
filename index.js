const express = require('express');
const app = express();
const reminders = require('./listOfReminders/listOfRemindersArr')
// import { listOfRemindersArr } from './listOfReminders';
const port = 8000;


console.log("reminders",reminders)
app.get("/reminders", (req, res) => {
  listOfRemindersArr
    .get()
    .then(reminders => {
      if (reminders) {
        res.status(200).json(reminders);
      } else {
        res.status(404).json({ message: "No reminder found" });
      }
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ messgae: "Error getting the information" });
    });
});

app.listen(port, () => {
  console.log(`====Example app listening at http://localhost:${port}=====`);
});