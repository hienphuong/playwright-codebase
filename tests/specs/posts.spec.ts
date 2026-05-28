import { expect } from "@playwright/test";
import { test } from "../fixtures/index" 
import { PostsPage } from "../pages/postsPage";

test.describe("test post page:", () => {

    test('test navigate to post page', async({postsPage}) => {
       await postsPage.goto();
       await expect(postsPage.page).toHaveURL(/edit\.php/);
    });

    test('Verify add new post successfully', async({postsPage,addPostPage}) => {
        await postsPage.goto();
        await postsPage.clickAddNew();
        await addPostPage.addNewPost('BETTER BYTES ACADEMY SAND');
        await addPostPage.saveDraft();
        await postsPage.goto();
        await expect(postsPage.postList).toContainText('BETTER BYTES ACADEMY SAND');
    })

});