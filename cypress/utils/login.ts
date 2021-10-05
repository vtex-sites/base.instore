export const DEFAULT_LOGIN = Cypress.env('DEFAULT_LOGIN')
export const DEFAULT_PASSWORD = Cypress.env('DEFAULT_PASSWORD')

export function loginWithRobot(
  login = DEFAULT_LOGIN,
  password = DEFAULT_PASSWORD,
  validateLoginWorked = true
) {
  cy.get('[data-testId=login-email]').clear().type(login)
  cy.get('[data-testId=login-password]').clear().type(password)
  cy.contains(/Entrar|Login/).click()

  if (validateLoginWorked) {
    cy.url({ timeout: 10000 }).should(
      'eq',
      `${Cypress.config().baseUrl}/instore/`
    )
  }
}
