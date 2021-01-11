$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Techfios_NewAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios Bank and Cash Add New Account Functionlity",
  "description": "",
  "id": "techfios-bank-and-cash-add-new-account-functionlity",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addaccount"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "User should be able to login with valid credentials and Add New Account",
  "id": "techfios-bank-and-cash-add-new-account-functionlity;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@NewAccScenario1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see Dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Bank \u0026 Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User Clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user fill up the form by entering \"\u003cAccount Title\u003e\" and \"\u003cDescription\u003e\" and \"\u003cInitial Balance\u003e\" and \"\u003cAccount Number\u003e\" and \"\u003cContact Person\u003e\" and \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be able to see Accounts page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-add-new-account-functionlity;;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "Account Title",
        "Description",
        "Initial Balance",
        "Account Number",
        "Contact Person",
        "Phone"
      ],
      "line": 22,
      "id": "techfios-bank-and-cash-add-new-account-functionlity;;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Worldtf",
        "savingaccount",
        "4000",
        "3456",
        "Jack",
        "909090909"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-add-new-account-functionlity;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41526600,
  "status": "passed"
});
formatter.before({
  "duration": 7990051300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewAccountStepDefs.user_is_on_Techfios_Login_Page()"
});
formatter.result({
  "duration": 4904123900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "User should be able to login with valid credentials and Add New Account",
  "id": "techfios-bank-and-cash-add-new-account-functionlity;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@addaccount"
    },
    {
      "line": 7,
      "name": "@NewAccScenario1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enter \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see Dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Bank \u0026 Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User Clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user fill up the form by entering \"Worldtf\" and \"savingaccount\" and \"4000\" and \"3456\" and \"Jack\" and \"909090909\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be able to see Accounts page.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 12
    },
    {
      "val": "abc123",
      "offset": 36
    }
  ],
  "location": "NewAccountStepDefs.user_enter_and(String,String)"
});
formatter.result({
  "duration": 358548100,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 2005209000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefs.user_should_be_able_to_see_Dashboard_page()"
});
formatter.result({
  "duration": 28270300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefs.user_clicks_on_Bank_Cash_button()"
});
formatter.result({
  "duration": 216325400,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefs.user_Clicks_on_New_Account()"
});
formatter.result({
  "duration": 1328320100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Worldtf",
      "offset": 35
    },
    {
      "val": "savingaccount",
      "offset": 49
    },
    {
      "val": "4000",
      "offset": 69
    },
    {
      "val": "3456",
      "offset": 80
    },
    {
      "val": "Jack",
      "offset": 91
    },
    {
      "val": "909090909",
      "offset": 102
    }
  ],
  "location": "NewAccountStepDefs.user_fill_up_the_form_by_entering_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3125517600,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefs.user_User_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 3379728400,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepDefs.user_should_be_able_to_see_Accounts_page()"
});
formatter.result({
  "duration": 494316600,
  "status": "passed"
});
});