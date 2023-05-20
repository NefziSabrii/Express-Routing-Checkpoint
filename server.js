const express = require('express');
const app = express();

const workingHoursMiddleware = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const isWorkingHour = day >= 1 && day <= 5 && hour >= 9 && hour < 17;
  if (!isWorkingHour) {
    res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
  } else {
    next();
  }
};


app.use(workingHoursMiddleware);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  
  app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
  });
  
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
  });

  const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  

  
  