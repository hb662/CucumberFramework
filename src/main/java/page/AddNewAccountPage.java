package page;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddNewAccountPage extends BasePage {

	WebDriver driver;

	public AddNewAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")
	WebElement BANK_AND_CASH_LOCATOR;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")
	WebElement NEW_ACCOUNT_LOCATOR;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[1]/h5")
	WebElement ADDNEW_ACCOUNT_LOCATOR;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement ACCOUNT_TITLE_LOCATOR;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement DESCRIPTION_LOCATOR;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement BALANCE_FIELD_LOCATOR;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement ACCOUNT_FIELD_LOCATOR;

	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement CONTACT_FIELD_LOCATOR;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement PHONEE_FIELD_LOCATOR;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement SIGNIN_BUTTON_LOCATOR;
	/*
	 * @FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[2]/a")
	 * WebElement LISTACCOUNT_BUTTON_LOCATOR;
	 */
	@FindBy(how = How.XPATH, using = "//div[@class='alert alert-success fade in']")
	WebElement ACCOUNTS_PAGE_LOCATOR;

	public void clickOnBankAndCash() {
		BANK_AND_CASH_LOCATOR.click();
	}

	public void clickOnAddAccount() {
		NEW_ACCOUNT_LOCATOR.click();
	}

	public void enterAllCredentailsForNewAccount(String accounttitle, String description, String balance,
			String accountNum, String contactPerson, String phone) {
		int random = randomNumGenerator();
		String enteredAccountTitle = accounttitle+random;
		ACCOUNT_TITLE_LOCATOR.sendKeys(enteredAccountTitle);
		DESCRIPTION_LOCATOR.sendKeys(description);
		BALANCE_FIELD_LOCATOR.sendKeys(balance);
		ACCOUNT_FIELD_LOCATOR.sendKeys(accountNum);
		CONTACT_FIELD_LOCATOR.sendKeys(contactPerson);
		PHONEE_FIELD_LOCATOR.sendKeys(phone);

	}

	public void clickOnSigninButton() {
		SIGNIN_BUTTON_LOCATOR.click();
	}

	/*
	 * public void clickonListAccount() { LISTACCOUNT_BUTTON_LOCATOR.click();
	 * 
	 * }
	 */
	public void assertAccountcreatedsuccessfully() {
      
		if (ACCOUNTS_PAGE_LOCATOR.isDisplayed())

		{
			System.out.println("User land on accout created successfully");
		} else {
			System.out.println("Wrong page");
		}

	}

}
