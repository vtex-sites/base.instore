export const DEFAULT_LOGIN = Cypress.env('DEFAULT_LOGIN')
export const DEFAULT_PASSWORD = Cypress.env('DEFAULT_PASSWORD')

export function loginWithRobot(
  login = DEFAULT_LOGIN,
  password = DEFAULT_PASSWORD
) {
  cy.get('[data-testId=login-email]').type(login)
  cy.get('[data-testId=login-password]').type(password)
  cy.contains('Confirm').click()

  cy.url({ timeout: 10000 }).should(
    'eq',
    `${Cypress.config().baseUrl}/instore/`
  )
}
