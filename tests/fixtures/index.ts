import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { PostsPage} from '../pages/postsPage';
import { PagesPage } from '../pages/pagesPage';
import { EditorPage } from '../pages/EditorPage';
export { expect } from '@playwright/test';

type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    postsPage: PostsPage;
    editorPage: EditorPage;
    pagesPage: PagesPage;
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
    editorPage: async ({ page }, use) => {
        const editorPage = new EditorPage(page);
        await use(editorPage);
    },
    pagesPage: async ({ page }, use) => {
        const pagesPage = new PagesPage(page);
        await use(pagesPage);
    },
});