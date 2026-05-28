import { expect } from "@playwright/test";
import { test } from "../fixtures/index" 

test.describe("Dashboard Page", () => {
    
    test('should navigate to dashboard', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.page).toHaveURL(/wp-admin/);
    });

    test('should display At a Glance block', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.atGlanceBlock).toBeVisible();
    });

    test('should display Activity block', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.activityBlock).toBeVisible();
    });

    test('should display quickDraft block', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.quickDraftBlock).toBeVisible();
    });

    test('should navigate to pages', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToPages();
        await expect(dashboardPage.page).toHaveURL(/edit\.php\?post_type=page/);
    });

    test('should navigate to posts', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToPosts();
        await expect(dashboardPage.page).toHaveURL(/edit\.php/);
    });

    test('should navigate to Media', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToMedia();
        await expect(dashboardPage.page).toHaveURL(/upload\.php/);
    });

    test('should navigate to Comments', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToComments();
        await expect(dashboardPage.page).toHaveURL(/edit-comments\.php/);
    });

    test('should navigate to settings', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToSettings();
        await expect(dashboardPage.page).toHaveURL(/options-general\.php/);
    });

    test('should navigate to Appearance', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToAppearance();
        await expect(dashboardPage.page).toHaveURL(/themes\.php/);
    });

    test('should navigate to Plugins', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToPlugins();
        await expect(dashboardPage.page).toHaveURL(/plugins\.php/);
    });

    test('should navigate to Users', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToUsers();
        await expect(dashboardPage.page).toHaveURL(/users\.php/);
    });

    test('should navigate to Tools', async ({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.navigateToTools();
        await expect(dashboardPage.page).toHaveURL(/tools\.php/);
    });

});