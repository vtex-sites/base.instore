import { mergeDeepRight } from 'ramda'

interface InStoreConfig {
  proxy?: string | null
  orderPlacedHook: Record<string, any>
  cancelOrderConfig: Record<string, any>
  showStock: boolean
  showAddressReference: boolean
  defaultSellerId: string
  featureToogle: Record<string, any>
  customerProfile: Record<string, any>
  accountName: string
  splunkConfig: Record<string, any>
  MasterDataConfig: Record<string, any>
  OMSFilters: Record<string, any>
  accounts: Record<string, Partial<InStoreConfig>>
  vendors: Record<string, Partial<InStoreConfig>>
  deviceNames: Record<string, any>
  printingConfig: Record<string, any>
  deviceConfig: Record<string, any>
  enableIdentificationTypes: Record<string, any>
  transferEnabled: boolean
  sellWithoutStockInHands: boolean
  allowAnonymousUser: boolean
  portalConfig: Record<string, any>
  trackingConfig: Record<string, any>
  search: Record<string, any>
  seller: Record<string, any>
  productPageSkip: boolean
  filters: string[]
  externals: []
  topbarTitle: string
  forceSimulationByCheckout: boolean
  isFullStoryEnabled: boolean
  showNetworkMessage: boolean
  printedOrderExtraText?: string
  isCancelOrderAlwaysVisible?: boolean
  productPage: Record<string, any>
  newPaymentArchitectureEnabled?: boolean
  pathAfterLogin: string
  isECommerce(): boolean
  toECommerce(payment: Record<string, any>): Record<string, any>
  getECommerceExecute(payment: Record<string, any>): Record<string, any>
}

const WAIT_FOR_CONFIG = 5000

declare global {
  interface Window {
    INSTORE_CONFIG: InStoreConfig
  }
}

function setConfigOnGlobalObj(
  win: Cypress.AUTWindow,
  config: Partial<InStoreConfig>
) {
  if (win.INSTORE_CONFIG) {
    const newConfig = mergeDeepRight(
      win.INSTORE_CONFIG,
      config
    ) as InStoreConfig

    win.INSTORE_CONFIG = newConfig
  }
}

export function setConfig(config: Partial<InStoreConfig> = {}) {
  cy.log(`Will set new config: ${JSON.stringify(config)}`)

  cy.window().then({ timeout: WAIT_FOR_CONFIG * 2 }, (win) => {
    if (win.INSTORE_CONFIG) {
      setConfigOnGlobalObj(win, config)

      cy.log('Finished setting config on first try')

      return Cypress.Promise.resolve(true)
    }

    return new Cypress.Promise((resolve, reject) => {
      setTimeout(() => {
        setConfigOnGlobalObj(win, config)

        cy.log('Finished setting config on second try')

        if (!win.INSTORE_CONFIG) {
          reject(new Error('INSTORE_CONFIG didnt load correct'))

          return
        }

        resolve(true)
      }, WAIT_FOR_CONFIG)
    })
  })
}
