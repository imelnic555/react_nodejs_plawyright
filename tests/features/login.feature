Feature: User Login

  Scenario: Successful login
    Given I am on the login page
    When I enter "test@example.com" and "password123"
    And I click login
    Then I should be logged in successfully
