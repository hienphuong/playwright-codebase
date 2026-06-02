import { expect } from "@playwright/test";
import { test } from "../fixtures/index" 
import { UsersPage } from "../pages/usersPage";

test.describe('Check User Page: ', () => {

    test('Verify go to user page', async({usersPage}) => {
        await usersPage.goto();
        await expect(usersPage.page).toHaveURL(/wp-admin\/users\.php/)
    })

    test('Verify add user ', async({usersPage,addUserPage}) => {
        await addUserPage.goto();
        await expect(addUserPage.page).toHaveURL(/wp-admin\/user-new\.php/);
        await addUserPage.addNewUser('nha phuong', 'nhaphuong@gmail.com', 'sand', 'tran', 'StrongPass@BetterBytesAcademy', 'subscriber');
        await usersPage.searchUser('nhaphuong@gmail.com');
        await expect(usersPage.usersList).toContainText('nhaphuong@gmail.com');
    })

    test('Verify search user ', async({usersPage}) => {
        await usersPage.goto();
        await usersPage.searchUser('sandphuong@gmail.com');
        await expect(usersPage.usersList).toContainText('sandphuong@gmail.com');
    })

    test('Verify delete user ', async({ usersPage, addUserPage }) => {
        // setup
        await addUserPage.goto();
        await addUserPage.addNewUser('sandauto', 'sandauto1@gmail.com', 'sand', 'tran', 'StrongPass@BetterBytesAcademy', 'subscriber');
    
        // delete
        await usersPage.goto();
        await usersPage.searchUser('sandauto1@gmail.com');
        await usersPage.deleteUser('sandauto1@gmail.com');
        await expect(usersPage.page.locator('#message')).toContainText('User deleted.');
    })
})