import { expect } from "@playwright/test";
import { test } from "../fixtures/index" 
import { PostsPage } from "../pages/postsPage";

test.describe("test post page:", () => {

    test('test navigate to post page', async({postsPage}) => {
       await postsPage.goto();
       await expect(postsPage.page).toHaveURL(/edit\.php/);
    });

    test('Verify add new post successfully', async({postsPage,editorPage}) => {
        await postsPage.goto();
        await postsPage.clickAddNew();
        await editorPage.addNewPost('BETTER BYTES ACADEMY SAND');
        await editorPage.saveDraft();
        await postsPage.goto();
        await expect(postsPage.postList).toContainText('BETTER BYTES ACADEMY SAND');
    })
    
    test('Verify search post successfully', async({postsPage,editorPage}) => {
        await postsPage.goto();
        await postsPage.searchPost('BETTER BYTES ACADEMY SAND')
        await expect(postsPage.postList).toContainText('BETTER BYTES ACADEMY SAND');
    })

    test('Verify delete post successfully', async({postsPage,editorPage}) => {
        await postsPage.goto();
        await postsPage.deletePost('BETTER BYTES ACADEMY SAND');
    })

});