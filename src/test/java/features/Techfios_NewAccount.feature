@addaccount @Regression 
Feature: Techfios Bank and Cash Add New Account Functionlity 

Background: 
	Given User is on Techfios Login Page 
	
@NewAccScenario1 
Scenario Outline: 
	User should be able to login with valid credentials and Add New Account
	When User enter "<userName>" and "<password>" 
	When User clicks on the login button 
	And User should be able to see Dashboard page 
	And User clicks on Bank & Cash button 
	And User Clicks on New Account 
	
	And user fill up the form by entering "<Account Title>" and "<Description>" and "<Initial Balance>" and "<Account Number>" and "<Contact Person>" and "<Phone>" 
	And User User clicks on Submit button 
	
	Then User should be able to see Accounts page. 
	
	Examples: 
		|userName | password | Account Title | Description | Initial Balance| Account Number| Contact Person| Phone|
		|demo@techfios.com|abc123| Worldtf| savingaccount| 4000| 3456| Jack| 909090909|