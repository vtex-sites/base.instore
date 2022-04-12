import { setConfig } from '../../utils/config'
import { DEFAULT_LOGIN, loginWithRobot } from '../../utils/login'

describe('home', () => {
  beforeEach(() => {
    cy.visit('/instore/login')

    cy.title().should('eq', 'VTEX inStore')

    setConfig({
      pathAfterLogin: '/',
      vendors: { [DEFAULT_LOGIN as string]: { pathAfterLogin: '/' } },
    })

    loginWithRobot()
  })

  it('Verify welcome message and body', () => {
    cy.contains('Welcome').should('be.visible')

    cy.contains('Rendered by Physical Store Team').should('be.visible')

    cy.contains('This is the home of Theme inStore Core! \\o/').should(
      'be.visible'
    )
  })
})
