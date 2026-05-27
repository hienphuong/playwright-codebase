import { expect } from "@playwright/test";
import { test } from "../fixtures/index" 

test.describe("test case:", () => {
    test('test login', async({loginPage}) => {
       await loginPage.page.goto('/wp-admin/');
       await expect(loginPage.page).toHaveURL(/wp-admin/);
    });
});