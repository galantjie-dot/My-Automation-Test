import { Page, Locator } from '@playwright/test';

export class homePage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly submitButton: Locator;



  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator('#j_username');
    this.passwordField = page.locator('#j_password');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async navigate() {
    await this.page.goto('https://www.pnp.co.za/');
  }

  async Login(email: string, password: string) {
    await this.page.getByRole('link', { name: 'Sign In / Register' }).click();
    await this.page.locator('#j_username').fill(email); 
    await this.page.locator('#j_password').waitFor({ state: 'visible' });
    await this.page.locator('input[name="j_password"]').fill(password);
    await this.page.locator('button[type="submit"]').click();
    // Alternatively, using the defined locators:
    // await this.emailField.fill(email);   

  }
}
