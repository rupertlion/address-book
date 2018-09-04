const { After, Given, Then, When } = require('cucumber')

After(async function() {
    return await this.closeHomePage()
})

Given('I visit the site', async function() {
    return await this.openHomePage()
})

Then('I should see {string}', async function(content) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

When('I click {string}', async function(string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('I fill in {string} with {string}', async function(string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('I should have {int} contact in my address book', async function(int) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('I should not see {string}', async function(string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})