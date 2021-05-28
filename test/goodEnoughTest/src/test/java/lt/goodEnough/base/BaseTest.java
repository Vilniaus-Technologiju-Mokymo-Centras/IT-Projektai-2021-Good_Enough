package lt.goodEnough.base;

import com.codeborne.selenide.Configuration;
import lt.goodEnough.locators.Locators;
import org.junit.jupiter.api.BeforeEach;

import static com.codeborne.selenide.Selenide.open;

public class BaseTest {
    Locators locator = new Locators();
    String webAppUrl = "http://localhost:3000/";
    String userLoginEmail = "admin@mail.com";
    String userLoginPass = "Password!1";

    @BeforeEach
    void startTest() {

        /** Screenshot after each tests is disabled */
        Configuration.screenshots = false;

        /** Tests runs in the background */
        Configuration.headless = false;

        /** Does not save url of page */
        Configuration.savePageSource = false;

        /** Leaves browser open when test is finished */
        Configuration.holdBrowserOpen = true;

        /** Opens web app */
        open(webAppUrl);
    }
    public void loginToAPage(){
        locator.signInEmailFieldLocator.sendKeys(userLoginEmail);
        locator.signInPasswordFieldLocator.sendKeys(userLoginPass);
        locator.signInSubmitButtonLocator.click();
    }
    public void loginToAPage(String userLoginEmail, String userLoginPass){
        locator.signInEmailFieldLocator.sendKeys(userLoginEmail);
        locator.signInPasswordFieldLocator.sendKeys(userLoginPass);
        locator.signInSubmitButtonLocator.click();
    }
}