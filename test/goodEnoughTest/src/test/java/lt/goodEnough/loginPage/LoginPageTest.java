package lt.goodEnough.loginPage;

import lt.goodEnough.base.BaseTest;
import lt.goodEnough.locators.Locators;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.switchTo;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class LoginPageTest extends BaseTest {
    Locators locator = new Locators();

    String userLoginEmail = "admin@mail.com";
    String userLoginPass = "Password!1";
    String headerSveikiPrisijunge = "Sveiki, prisijungę!";
    String loginPagePrisijungti = "Prisijungti";
    String invalidLoginEmail = "something@mail.com";
    String invalidLoginPass = "Nothing1";
    String invalidUsernameOrPasswordAlertMessage = "Neteisingas prisijungimo vardas ir/arba slaptažodis";
    String loginFieldValidationMessageEnglish = "Please fill in this field.";
    String loginFieldValidationMessageLithuanian = "Užpildykite šį lauką.";

//    smoke regression
    @Test
    void isAbleToLoginToApplicationAndLogout() {
        loginToAPage();
        assertEquals(headerSveikiPrisijunge, locator.headerSveikiPrisijungeLocator.shouldBe().getText());
        locator.sideMeniuLogoutButtonLocator.click();
        assertEquals(loginPagePrisijungti, locator.loginPagePrisijungtiLocator.getText());
    }

//    Alert message with message "Neteisingas prisijungimo vardas ir/arba slaptažodis"
    @Test
    void showsAlertMessageWithIncorrectEmailOrPassword() {
        loginToAPage(invalidLoginEmail, invalidLoginPass);
        assertEquals(invalidUsernameOrPasswordAlertMessage, switchTo().alert().getText());
        switchTo().alert().accept();
    }

}
