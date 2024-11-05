import express from 'express';
import fs from 'fs/promises';
import cors from 'cors'; 

const app = express();
const port = 3000;

app.use(cors());

app.get('/shows', async (req, res) => {
  try {
    const data = await fs.readFile('shows.json', 'utf-8');
    const shows = JSON.parse(data);
    res.json(shows);
  } catch (error) {
    res.status(500).json({ error: 'Unable to read shows data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
