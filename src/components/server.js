
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'sbarman',
  password: 'abc123',
  database: 'contacts'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// API endpoint to receive form data
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      res.status(200).send('Form submitted successfully');
    }
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
