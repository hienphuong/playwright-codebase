import { test as setup } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
setup.setTimeout(60000);

setup('Initial project and file',async ({page}) => { 
    
    const loginPage = new LoginPage(page);

    await loginPage.login();
    
    console.log('login done!');
  
});