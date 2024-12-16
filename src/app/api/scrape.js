// pages/api/scrape.js
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Launch the browser
      const browser = await puppeteer.launch({
        headless: true, // Set to false to see the browser
      });

      // Open a new page
      const page = await browser.newPage();

      // Navigate to a URL (replace with the URL you need)
      await page.goto('https://gatewaymalabar.com/');

      // Extract data from the page (e.g., the title)
      const pageTitle = await page.title();

      // Close the browser
      await browser.close();

      // Send the extracted data as the response
      res.status(200).json({ title: pageTitle });
    } catch (error) {
      res.status(500).json({ error: 'Error scraping the page' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
