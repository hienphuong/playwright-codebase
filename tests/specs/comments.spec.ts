import { expect } from "@playwright/test";
import { test } from "../fixtures/index";
import { CommentsPage } from "../pages/commentsPage";

test.describe(" Comment Page: ", () => {
    test('Verify go to comment page', async ({ commentsPage }) =>{
        await commentsPage.goto();
        await expect(commentsPage.page).toHaveURL(/edit-comments\.php/)
    })

    test(' Verify search comment successfully', async ({ commentsPage }) => {
        await commentsPage.goto();
        await commentsPage.searchComment('abc');
        await expect(commentsPage.listComment).toContainText('abc');
    })
})