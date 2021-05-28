package lt.goodEnough.locators;

import com.codeborne.selenide.SelenideElement;

import static com.codeborne.selenide.Selenide.$;

public class Locators {
    public SelenideElement signInEmailFieldLocator = $("#email");
    public SelenideElement signInPasswordFieldLocator = $("#password");
    public SelenideElement signInSubmitButtonLocator = $(".MuiButton-label");
    public SelenideElement headerSveikiPrisijungeLocator = $("h6.MuiTypography-root:nth-child(2)");
    public SelenideElement sideMeniuLogoutButtonLocator = $("ul.MuiList-root:nth-child(5) > div:nth-child(1)");
    public SelenideElement loginPagePrisijungtiLocator = $("h1.MuiTypography-root");
    public SelenideElement projectDeleteButtonLocator = $("tr.makeStyles-root-25:nth-child(1) > td:nth-child(7) > button:nth-child(3)");
    public SelenideElement projectNameLocator = $("div.MuiPaper-root.MuiTableContainer-root.MuiPaper-elevation1.MuiPaper-rounded > table > tbody > tr:nth-child(1) > a > th");
    public SelenideElement createProjectButtonLocator = $(".MuiFab-root");
    public SelenideElement createProjectEnterNameLocator = $("div.my-2:nth-child(2) > input:nth-child(1)");
    public SelenideElement createProjectEnterDescriptionLocator = $("div.my-2:nth-child(3) > input:nth-child(1)");
    public SelenideElement createProjectSaveButtonLocator = $("button.btn:nth-child(5)");
    public SelenideElement newProjectNameInAListLocator = $("tr.MuiTableRow-root:nth-child(19) > a:nth-child(2) > th:nth-child(1)");
    public SelenideElement newProjectDescriptionInAListLocator = $("tr.MuiTableRow-root:nth-child(19) > td:nth-child(3)");
//    public SelenideElement  = $("");


}
