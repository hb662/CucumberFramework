package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AddNewAccountPage;
import page.LoginPage;
import util.BrowserFactory;

public class NewAccountStepDefs {

	WebDriver driver;
	LoginPage loginpage;
	AddNewAccountPage accountpage;

	@Before
	public void before_run() {
		driver = BrowserFactory.init();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		accountpage = PageFactory.initElements(driver, AddNewAccountPage.class);

	}

	@Given("^User is on Techfios Login Page$")
	public void user_is_on_Techfios_Login_Page() throws Throwable {
		driver.get("http://www.techfios.com/billing/?ng=admin/");

	}

	@When("^User enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String userName, String password) throws Throwable {
		loginpage.enterCredentials(userName, password);

	}

	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		loginpage.clickSigninButton();

	}

	@Then("^User should be able to see Dashboard page$")
	public void user_should_be_able_to_see_Dashboard_page() throws Throwable {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginpage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);

	}

	@And("^User clicks on Bank & Cash button$")
	public void user_clicks_on_Bank_Cash_button() throws Throwable {
		accountpage.clickOnBankAndCash();

	}

	@And("^User Clicks on New Account$")
	public void user_Clicks_on_New_Account() throws Throwable {
		accountpage.clickOnAddAccount();

	}

	@And("^user fill up the form by entering \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_fill_up_the_form_by_entering_and_and_and_and_and(String accounttitle, String description,
			String balance, String accountNum, String contactPerson, String phone) throws Throwable {
		accountpage.enterAllCredentailsForNewAccount(accounttitle, description, balance, accountNum, contactPerson,
				phone);
		Thread.sleep(2000);

	}

	@And("^User User clicks on Submit button$")
	public void user_User_clicks_on_Submit_button() throws Throwable {
		accountpage.clickOnSigninButton();
		Thread.sleep(2000);
	}

	/*
	 * @Then("^User Clicks on List Accounts$") public void
	 * user_Clicks_on_List_Accounts() throws Throwable {
	 * accountpage.clickonListAccount(); Thread.sleep(2000); }
	 */

	@Then("^User should be able to see Accounts page\\.$")
	public void user_should_be_able_to_see_Accounts_page() throws Throwable {
		accountpage.assertAccountcreatedsuccessfully();
		  loginpage.takeScreenshotAtEndOfTest(driver);
	}

	/*
	 * @After public void tear_down() { driver.close(); driver.quit(); }
	 */

}
