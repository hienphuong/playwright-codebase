import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { PostsPage} from '../pages/postsPage';
import { PagesPage } from '../pages/pagesPage';
import { EditorPage } from '../pages/EditorPage';
import { CommentsPage } from '../pages/commentsPage';
import { UsersPage } from '../pages/usersPage';
import { AddUserPage } from '../pages/addUserPage';
export { expect } from '@playwright/test';

type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    postsPage: PostsPage;
    editorPage: EditorPage;
    pagesPage: PagesPage;
    commentsPage: CommentsPage;
    usersPage: UsersPage;
    addUserPage: AddUserPage;
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
    commentsPage: async ({ page }, use) => {
        const commentsPage = new CommentsPage(page);
        await use(commentsPage);
    },
    usersPage: async({ page }, use) => {
        const usersPage = new UsersPage(page);
        await use(usersPage);
    },
    addUserPage: async({ page}, use) => {
        const addUserPage = new AddUserPage(page);
        await use(addUserPage);
    }
});