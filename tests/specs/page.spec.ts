import { expect } from "@playwright/test";
import { test } from "../fixtures/index" 
import { PagesPage } from "../pages/pagesPage";

test.describe("test page page:", () => {

    test('test navigate to page page', async({pagesPage}) => {
       await pagesPage.goto();
       await expect(pagesPage.page).toHaveURL(/edit\.php\?post_type=page/);
    });

    test('Verify add new page successfully', async({pagesPage,editorPage}) => {
        await pagesPage.goto();
        await pagesPage.clickAddNew();
        await editorPage.addNewPost('BETTER BYTES ACADEMY SAND');
        await editorPage.saveDraft();
        await pagesPage.goto();
        await expect(pagesPage.listPage).toContainText('BETTER BYTES ACADEMY SAND');
    })
    
    test('Verify search page successfully', async({pagesPage,editorPage}) => {
        await pagesPage.goto();
        await pagesPage.searchPage('BETTER BYTES ACADEMY SAND')
        await expect(pagesPage.listPage).toContainText('BETTER BYTES ACADEMY SAND');
    })

    test('Verify delete page successfully', async({pagesPage,editorPage}) => {
        await pagesPage.goto();
        await pagesPage.deletePage('BETTER BYTES ACADEMY SAND');
    })

});