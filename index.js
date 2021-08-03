const express = require('express');
const app = express();
const faker = require('faker');
const _ = require('lodash');
const port = 8000;

const dummmyReminders = faker.lorem.text();

app.get('/', (req, res) => {
  const count = 1;
  if (!count) {
    console.log('in 400 error')
    return res
      .status(400)
      .send({ errorMsg: 'count query parameter is missing' });
  } else if (dummmyReminders) {
    console.log('in 200 ')
    // const dummmyReminders = faker.lorem.text();
    const uuid = faker.datatype.uuid();

    const reminderObject = {
      id: uuid,
      reminder: dummmyReminders,
    };
    console.log("in reminders object")
    console.log(reminderObject)
    res.status(200).json(reminderObject);
  } else {
    console.log('in 500 error')
    err => {
      console.log('error', err);
      res.status(500).json({ messgae: 'Error getting the information' });
    };
  }
});

app.listen(port, () => {
  console.log(`====Example app listening at http://localhost:${port}=====`);
});
