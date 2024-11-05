import fetch from 'node-fetch';
import fs from 'fs';
import cron from 'node-cron';

const url = 'https://officiallondontheatre.com/wp-json/shows/all-open';

async function scrapeData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    fs.writeFileSync('shows.json', JSON.stringify(data));
    console.log('Data scraped successfully.');
  } catch (error) {
    console.error('Error scraping data:', error);
  }
}
cron.schedule('*/5 * * * *', () => {
  scrapeData();
});

scrapeData();
