import { Page, Locator } from "@playwright/test";

export class AddUserPage{
    readonly page: Page;

    // locators
    readonly userName: Locator;
    readonly email: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly password: Locator;
    readonly role: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.userName = page.locator('#user_login');
        this.email = page.locator('#email');
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.password = page.locator('#pass1');
        this.role = page.locator('#role'); // subscriber, contributor, author, editor, administrator
        this.submitButton = page.locator('#createusersub');   
    }

    // actions
    async goto(){
        await this.page.goto('/wp-admin/user-new.php');
    }
    async addNewUser(
        userName: string, 
        email: string, 
        firstName: string, 
        lastName: string,
        password: string, 
        role: string
    ) {
       await this.userName.fill(userName);
       await this.email.fill(email);
       await this.firstName.fill(firstName);
       await this.lastName.fill(lastName);
       await this.password.clear();
       await this.password.fill(password);
       await this.role.selectOption(role);
       await this.submitButton.click();
    }

    async saveDraft() {
       
    }
}
