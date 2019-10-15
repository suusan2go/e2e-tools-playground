Feature("Getting Started");

Scenario("test something", I => {
  I.amOnPage("https://devexpress.github.io/testcafe/example/");
  I.fillField("name", "suusan2go");
  I.click("Submit");
  I.see("Thank you, suusan2go!");
  const random = Math.random()
    .toString(36)
    .slice(-8);
  I.saveScreenshot("./screenshots/" + random + ".png");
});
