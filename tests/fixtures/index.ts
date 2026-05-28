import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { PostsPage} from '../pages/postsPage';
import { AddPostPage } from '../pages/addPostPage';
export { expect } from '@playwright/test';

type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    postsPage: PostsPage
    addPostPage: AddPostPage
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    postsPage: async ({ page }, use) => {
        const postsPage = new PostsPage(page);
        await use(postsPage);
    },
    addPostPage: async ({ page }, use) => {
        const addPostPage = new AddPostPage(page);
        await use(addPostPage);
    },
});