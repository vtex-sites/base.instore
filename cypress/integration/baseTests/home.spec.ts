import { loginWithRobot } from '../../utils/login'

describe('home', () => {
  beforeEach(() => {
    cy.visit('/instore')

    cy.title().should('eq', 'VTEX inStore')
  })

  it('Verify welcome message and body', () => {
    loginWithRobot()

    cy.contains('Welcome').should('be.visible')

    cy.contains('Hello World').should('be.visible')

    cy.contains('Rendered by Physical Store Team').should('be.visible')

    cy.contains('This is the home of Theme inStore Core! \\o/').should(
      'be.visible'
    )
  })
})
