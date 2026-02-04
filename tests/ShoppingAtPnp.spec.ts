import { test, expect } from '@playwright/test';
import { homePage } from '../Pages/homePage';
import dotenv from 'dotenv';

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
    // Use BASE_URL from .env
    const baseURL = process.env.BASE_URL ?? 'https://www.pnp.co.za/';
    await page.goto(baseURL);

  });
});
