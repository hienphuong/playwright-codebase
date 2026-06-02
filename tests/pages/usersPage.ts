import { Page, Locator } from "@playwright/test";

export class UsersPage {
    readonly page: Page;

    // locators
    readonly usersList: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput     = page.locator('#user-search-input');
        this.searchButton    = page.locator('#search-submit');
        this.usersList       = page.locator('#the-list');
    }

    // actions
    async goto() {
        await this.page.goto('/wp-admin/users.php');
    }


    // search as key
    async searchUser(keyword: string) {
        await this.searchInput.fill(keyword);
        await this.searchButton.click();
    }

    async deleteUser(email: string) {
        const row = this.page.locator('tr').filter({ hasText: email }).first();
        await row.hover();
        await row.getByRole('link', { name: 'Delete' }).click();
        // confirm delete
        await this.page.getByRole('button', { name: 'Confirm Deletion' }).click();
    }

}