import { Page, Locator } from "@playwright/test";

export class CommentsPage {
    readonly page: Page;

    // locators
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly listComment: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('#comment-search-input')
        this.searchButton = page.locator('#search-submit');
        this.listComment = page.locator('#the-comment-list');   
    }
    
    async goto() {
        await this.page.goto('/wp-admin/edit-comments.php');
    }

    // search as key
    async searchComment(keyword: string) {
        await this.searchInput.fill(keyword);
        await this.searchButton.click();
    }

    getRow(title: string): Locator {
        return this.page.locator('tr').filter({ hasText: title }).first();
    }
    
    async deleteComment(title: string) {
        const row = this.getRow(title);
        await row.hover();
        await row.getByRole('link', { name: 'Trash' }).click();
    }
}


