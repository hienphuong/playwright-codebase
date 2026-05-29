import { Page, Locator } from "@playwright/test";

export class PagesPage {
    readonly page: Page;

    // locators
    readonly addPage: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly listPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addPage = page.locator('a.page-title-action');
        this.searchInput = page.locator('#post-search-input')
        this.searchButton = page.locator('#search-submit');
        this.listPage = page.locator('#the-list');
         
    }
    
    async goto() {
        await this.page.goto('/wp-admin/edit.php?post_type=page');
    }

    // click add new
    async clickAddNew() {
        await this.addPage.click();
        await this.page.waitForURL('**/wp-admin/post-new.php?post_type=page');
    }

    // search as key
    async searchPage(keyword: string) {
        await this.searchInput.fill(keyword);
        await this.searchButton.click();
    }

    getRow(title: string): Locator {
        return this.page.locator('tr').filter({ hasText: title }).first();
    }
    
    async deletePage(title: string) {
        const row = this.getRow(title);
        await row.hover();
        await row.getByRole('link', { name: 'Trash' }).click();
    }
}


