import { Page, Locator } from "@playwright/test";

export class EditorPage{
    readonly page: Page;

    // locators
    readonly titleInput: Locator;
    readonly saveDraftButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleInput = this.page.frameLocator('iframe[name="editor-canvas"]')
                           .getByRole('textbox', { name: 'Add title' });
        this.saveDraftButton = page.getByRole('button', { name: 'Save draft' });
    }

    // actions
    async addNewPost(title: string) {
        await this.titleInput.click();
        await this.titleInput.pressSequentially(title);  
    }

    async saveDraft() {
        await this.saveDraftButton.click();
        await this.page.waitForURL(/post\.php\?post=\d+/);
    }
}
