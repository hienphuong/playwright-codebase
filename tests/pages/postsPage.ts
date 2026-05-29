import { Page, Locator } from "@playwright/test";

export class PostsPage {
    readonly page: Page;

    // locators
    readonly addNewButton: Locator;
    readonly postList: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly bulkActionSelect: Locator;
    readonly applyButton: Locator;
    readonly row: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addNewButton    = page.locator('a.page-title-action');
        this.postList        = page.locator('#the-list');
        this.searchInput     = page.locator('#post-search-input');
        this.searchButton    = page.locator('#search-submit');
        this.bulkActionSelect = page.locator('#bulk-action-selector-top');
        this.applyButton     = page.locator('#doaction');
    }

    // actions
    async goto() {
        await this.page.goto('/wp-admin/edit.php');
    }

    // click add new
    async clickAddNew() {
        await this.addNewButton.click();
        await this.page.waitForURL('**/wp-admin/post-new.php');
    }

    // search as key
    async searchPost(keyword: string) {
        await this.searchInput.fill(keyword);
        await this.searchButton.click();
    }

    getRow(title: string): Locator {
        return this.page.locator('tr').filter({ hasText: title }).first();
    }
    
    async deletePost(title: string) {
        const row = this.getRow(title);
        await row.hover();
        await row.getByRole('link', { name: 'Trash' }).click();
    }
}