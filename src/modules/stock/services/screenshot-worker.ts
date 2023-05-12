
import { IStock } from '../interfaces/stock._id.interface';
import { By, Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import * as fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';

export class ScreenshotWorker {
  private stock: IStock;

  constructor(stock: IStock) {
    this.stock = stock;
  }

  async run() {
    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(
        new chrome.Options()
        .headless()
        .windowSize({ width: 900, height: 12000 })
      )
      .usingServer('http://localhost:4444/wd/hub')
      .build();

    try {
      const baseUrl = process.env.BASE_URL;
      await driver.get(`${baseUrl}/${this.stock._id.toString()}`);
      await driver.sleep(3000); // Wait for 3 seconds
      const bodyElement = await driver.findElement(By.css('#container > div'));
      const screenshot = await bodyElement.takeScreenshot();
      fs.writeFileSync(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`, screenshot, 'base64');
      console.log(`Screenshot taken successfully for ${this.stock.stockCode}`);

      const formData = new FormData();
      const imageFile = await fs.promises.readFile(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`);
      formData.append('file', imageFile, { filename: `${this.stock.stockCode}.jpg` });
      formData.append('_id', this.stock._id.toString());

      
      const response = await axios.post(process.env.API_URL, formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });

      console.log('Response:', response.data);

      this.stock.status = 2;

    } catch (error) {
      this.stock.status = -1;
      console.error(error);
    } finally {
      await driver.quit();
    }
    console.log(this.stock.status)
  }
}












