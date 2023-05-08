// cho web sleep 3s rồi mới chụp

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
        .windowSize({ width: 900, height: 12000 }),
      )
      .build();

    try {
      await driver.get(`http://localhost:3000/${this.stock._id.toString()}`);
      await driver.sleep(3000); // Wait for 8 seconds
      const bodyElement = await driver.findElement(By.css('#container > div'));
      const screenshot = await bodyElement.takeScreenshot();
      fs.writeFileSync(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`, screenshot, 'base64');
      console.log(`Screenshot taken successfully for ${this.stock.stockCode}`);

      const formData = new FormData();
      const imageFile = await fs.promises.readFile(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`);
      formData.append('file', imageFile, { filename: `${this.stock.stockCode}.jpg` });
      formData.append('_id', this.stock._id.toString());

      // console.log("file ảnh:" , imageFile)
      
      const response = await axios.post('https://7e54-118-71-105-160.ngrok-free.app/api/v1/jobs/uploadfile/', formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });

      console.log('Response:', response.data);

      this.stock.status = 1;

    } catch (error) {
      this.stock.status = -1;
      console.error(error);
    } finally {
      await driver.quit();
    }
  }
}



// thực hiện cập nhật status nếu thành công = 1, thất bại = -1

// import { IStock } from '../interfaces/stock._id.interface';
// import { By, Builder } from 'selenium-webdriver';
// import chrome from 'selenium-webdriver/chrome';
// import * as fs from 'fs';
// import axios from 'axios';
// import FormData from 'form-data';
// import { StockService } from './stock.service';

// export class ScreenshotWorker {
//   private stock: IStock;
//   private stockService: StockService;

//   constructor(stock: IStock, stockService: StockService) {
//     this.stock = stock;
//     this.stockService = stockService;
//   }

//   async run() {
//     const driver = await new Builder()
//       .forBrowser('chrome')
//       .setChromeOptions(
//         new chrome.Options()
//         .headless()
//         .windowSize({ width: 900, height: 12000 }),
//       )
//       .build();

//     try {
//       await driver.get(`http://localhost:3000/${this.stock._id.toString()}`);
//       await driver.sleep(3000); // Wait for 8 seconds
//       const bodyElement = await driver.findElement(By.css('#container > div'));
//       const screenshot = await bodyElement.takeScreenshot();
//       fs.writeFileSync(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`, screenshot, 'base64');
//       console.log(`Screenshot taken successfully for ${this.stock.stockCode}`);

//       const formData = new FormData();
//       const imageFile = await fs.promises.readFile(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`);
//       formData.append('file', imageFile, { filename: `${this.stock.stockCode}.jpg` });
//       formData.append('_id', this.stock._id.toString());

//       const response = await axios.post('https://7e54-118-71-105-160.ngrok-free.app/api/v1/jobs/uploadfile/', formData, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'multipart/form-data'
//         },
//         maxContentLength: Infinity,
//         maxBodyLength: Infinity,
//       });

//       console.log('Response:', response.data);

//       await this.stockService.update(this.stock._id.toString(), { status: '1' });
//       console.log(`Stock ${this.stock.stockCode} status updated successfully to 1`);

//     } catch (error) {
//       await this.stockService.update(this.stock._id.toString(), { status: '-1' });
//       console.error(`Error occurred for stock ${this.stock.stockCode}:`, error);
//     } finally {
//       await driver.quit();
//     }
//   }
// }

// lần 2 test này

// import { IStock } from '../interfaces/stock._id.interface';
// import { By, Builder } from 'selenium-webdriver';
// import chrome from 'selenium-webdriver/chrome';
// import * as fs from 'fs';
// import axios from 'axios';
// import FormData from 'form-data';
// import { StockService } from '../services/stock.service';

// export class ScreenshotWorker {
//   private stock: IStock;

//   constructor(stock: IStock, private readonly stockService: StockService) {
//     this.stock = stock;
//   }

//   async run() {
//     const driver = await new Builder()
//       .forBrowser('chrome')
//       .setChromeOptions(
//         new chrome.Options()
//         .headless()
//         .windowSize({ width: 900, height: 12000 }),
//       )
//       .build();

//     try {
//       await driver.get(`http://localhost:3000/${this.stock._id.toString()}`);
//       await driver.sleep(3000); // Wait for 8 seconds
//       const bodyElement = await driver.findElement(By.css('#container > div'));
//       const screenshot = await bodyElement.takeScreenshot();
//       fs.writeFileSync(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`, screenshot, 'base64');
//       console.log(`Screenshot taken successfully for ${this.stock.stockCode}`);

//       const formData = new FormData();
//       const imageFile = await fs.promises.readFile(`src/public/assets/img/img.web/${this.stock.stockCode}.jpg`);
//       formData.append('file', imageFile, { filename: `${this.stock.stockCode}.jpg` });
//       formData.append('_id', this.stock._id.toString());

//       const response = await axios.post('https://7e54-118-71-105-160.ngrok-free.app/api/v1/jobs/uploadfile/', formData, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'multipart/form-data'
//         },
//         maxContentLength: Infinity,
//         maxBodyLength: Infinity,
//       });

//       console.log('Response:', response.data);

//       // Update stock status
//       await this.stockService.update(this.stock._id, { status: '1' });

//     } catch (error) {
//       console.error(error);
//       // Update stock status
//       await this.stockService.update(this.stock._id, { status: '-1' });
//     } finally {
//       await driver.quit();
//     }
//   }
// }












