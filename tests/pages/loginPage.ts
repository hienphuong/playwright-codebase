import { Page } from "@playwright/test";
import { BASE_URL, USERNAME, PASSWORD } from "../../utils/env";

export class LoginPage{
    readonly page: Page;
    readonly BASE_URL: string;
    readonly USERNAME: string;
    readonly PASSWORD: string;

    constructor(page: Page){
        this.page = page;
        this.BASE_URL = BASE_URL;
        this.USERNAME = USERNAME;
        this.PASSWORD = PASSWORD;
    }

    async login(){

        await this.page.goto(BASE_URL);
    
        await this.page.getByLabel('Username or Email Address').fill(USERNAME);
        
        await this.page.locator('#user_pass').fill(PASSWORD);
    
        await this.page.getByRole('button', { name: 'Log in'}).click();
    
        await this.page.waitForURL('**/wp-admin/');
    
        await this.page.context().storageState({ path:'tests/.auth/user.json' });

    }
   

}