import { Page, Locator } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;

    // # locators
    readonly atGlanceBlock: Locator;
    readonly activityBlock: Locator;
    readonly quickDraftBlock: Locator;

    // # Nav menu
    readonly postsMenu: Locator;
    readonly pagesMenu: Locator;
    readonly mediaMenu: Locator;
    readonly commentsMenu: Locator;
    readonly appearanceMenu: Locator;
    readonly pluginsMenu: Locator;
    readonly usersMenu: Locator;
    readonly toolsMenu: Locator;
    readonly settingsMenu: Locator;

    // # constructor
    constructor(page: Page){
        this.page = page;

        this.atGlanceBlock = page.locator('#dashboard_right_now');
        this.activityBlock = page.locator('#dashboard_activity');
        this.quickDraftBlock = page.locator('#dashboard-widgets #dashboard_quick_press');

        this.mediaMenu      = page.locator('#menu-media');
        this.pluginsMenu    = page.locator('#menu-plugins');
        this.postsMenu      = page.getByRole('link', { name: 'Posts', exact: true });
        this.pagesMenu      = page.getByRole('link', { name: 'Pages', exact: true });
        this.commentsMenu   = page.getByRole('link', { name: 'Comments', exact: true });
        this.appearanceMenu = page.getByRole('link', { name: 'Appearance', exact: true });
        this.usersMenu      = page.getByRole('link', { name: 'Users', exact: true });
        this.toolsMenu      = page.getByRole('link', { name: 'Tools', exact: true });
        this.settingsMenu   = page.getByRole('link', { name: 'Settings', exact: true });
    }

    // # actions
    async goto() {
        await this.page.goto('/wp-admin/')
    } 

    // navigateToPages
    async navigateToPages() {
        await this.pagesMenu.click();
        await this.page.waitForURL('**/wp-admin/edit.php?post_type=page');

    }

    // navigateToPosts
    async navigateToPosts() {
        await this.postsMenu.click();
        await this.page.waitForURL('**/wp-admin/edit.php');
    }

    // navigateToMedia
    async navigateToMedia() {
        await this.mediaMenu.click();
        await this.page.waitForURL('**/wp-admin/upload.php');
    }

    // navigateToComments
    async navigateToComments() {
        await this.commentsMenu.click();
        await this.page.waitForURL('**/wp-admin/edit-comments.php');
    }

    // navigateToSettings
    async navigateToSettings() {
        await this.settingsMenu.click();
        await this.page.waitForURL('**/wp-admin/options-general.php');
    }
    //  navigateToAppearance
    async navigateToAppearance() {
        await this.appearanceMenu.click();
        await this.page.waitForURL('**/wp-admin/themes.php');
    }
    //  navigateToPlugins
        async navigateToPlugins() {
        await this.pluginsMenu.click();
        await this.page.waitForURL('**/wp-admin/plugins.php');
    }
    
    //  navigateToUsers
    async navigateToUsers() {
        await this.usersMenu.click();
        await this.page.waitForURL('**/wp-admin/users.php');
    }

    //  navigateToTools
    async navigateToTools() {
        await this.toolsMenu.click();
        await this.page.waitForURL('**/wp-admin/tools.php');
    }
}