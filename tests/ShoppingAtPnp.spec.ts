import { test, expect } from '@playwright/test';
import { homePage } from '../Pages/homePage';
import dotenv from 'dotenv';
import { ProductPage } from '../Pages/productPage';
import { LoginPage } from '../Pages/LoginPage';


// Load environment variables from .env file
dotenv.config();

test.beforeEach(async ({ page }) => {
  const homePageInstance = new homePage(page);
  await homePageInstance.navigate(); // goes to login.pnp.co.za

  // Use valid credentials or from environment variables
  const email = process.env.PNP_EMAIL as string;
  const password = process.env.PNP_PASSWORD as string;
  await homePageInstance.Login(email, password);
});



test.describe('Shopping at Pick n Pay', () => {
  test('should load homepage', async ({ page }) => {
     const baseURL = process.env.BASE_URL ?? 'https://www.pnp.co.za/';
    await page.goto(baseURL);
    const productPage = new ProductPage(page);
    await expect(page).toHaveURL(/.*pnp.co.za/);

    // navigate to product page
    await productPage.navigateToProducts();

    // perform product selections
 await productPage.selectDropdown('');
 await productPage.clickToysAndGamesButton();
 await productPage.clickGamesLink();
 await productPage.clickAddButton(0);
 await productPage.fillAddress('');
 await productPage.saveAddressButton.click();


 
  });
});

