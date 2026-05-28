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

    // selectBulkAction
    async selectBulkAction(action: '-1' | 'edit' | 'trash') {
        await this.bulkActionSelect.selectOption(action);
    }

    // applyBulkAction
    async applyBulkAction() {
        await this.applyButton.click();
    }
}