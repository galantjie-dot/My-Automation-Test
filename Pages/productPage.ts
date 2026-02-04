import { Locator, Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly shopAislesButton: Locator;
  readonly toysAndGamesButton: Locator;
  readonly gamesLink: Locator;
  readonly addToCartButton: Locator;
  readonly storeSearchInput: Locator;
  readonly saveAddressButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.shopAislesButton = this.page.locator('button:has-text("Shop Aisles")');
    this.toysAndGamesButton = this.page.locator('button:has-text("Toys & Games")');
    this.gamesLink = this.page.locator('a:has-text("Games")');
    this.addToCartButton = this.page.locator('#add-button-id'); 
    this.storeSearchInput = this.page.locator('#store-search-input-id'); 
this.saveAddressButton = this.page.getByRole('button', { name: 'Save address' })
  }

  // Locators
async navigateToProducts() { 
    await this.page.goto(process.env.PRODUCT_URL ?? 'https://www.pnp.co.za/products'); 
}

  // Actions
  async selectDropdown(optionText: string) {
    await this.shopAislesButton.click();
  }

  async clickToysAndGamesButton() {
    await this.toysAndGamesButton.click();
  }

  async clickGamesLink() {
    await this.page.getByRole('link', { name: 'Games', exact: true }).click();
  }

 async clickAddButton(productIndex: number = 4) {
  const product = this.page.locator('ui-product-grid-item').nth(productIndex);
  const addButton = product.locator('button[data-cnstrc-btn="add_to_cart"]');
  await addButton.waitFor({ state: 'visible', timeout: 60000 });
  await addButton.click();
};


async fillAddress(address: string) {
   await this.page.fill('input[aria-label="Search nearest store"]', '124 main road kalk bay...', { timeout: 60000 });
   await this.page.getByRole('button', { name: 'Save address' }).click();



}
}

