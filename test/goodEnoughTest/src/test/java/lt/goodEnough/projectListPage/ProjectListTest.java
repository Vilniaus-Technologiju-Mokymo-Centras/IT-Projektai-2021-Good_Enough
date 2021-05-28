package lt.goodEnough.projectListPage;

import com.codeborne.selenide.Selenide;
import lt.goodEnough.base.BaseTest;
import lt.goodEnough.locators.Locators;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.switchTo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class ProjectListTest  extends BaseTest {
    Locators locator = new Locators();
    String newProjectName = "Naujas projektas";
    String newProjectDescription = "Naujo projekto aprašymas";

//    Test to delete a project
    @Test
    void deleteProject() {
        loginToAPage();
        String projectName = locator.projectNameLocator.getText();
        locator.projectDeleteButtonLocator.click();
        switchTo().alert().accept();
        assertNotEquals(projectName, locator.projectNameLocator.getText());
    }

//    Create new project
    @Test
    void createProject() {
        loginToAPage();
        locator.createProjectButtonLocator.click();
        locator.createProjectEnterNameLocator.sendKeys(newProjectName);
        locator.createProjectEnterDescriptionLocator.sendKeys(newProjectDescription);
        locator.createProjectSaveButtonLocator.click();
        assertEquals(newProjectName, locator.newProjectNameInAListLocator.getText());
        assertEquals(newProjectDescription, locator.newProjectDescriptionInAListLocator.getText());
    }
}
