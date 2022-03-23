import { defineConfig } from 'cypress'
import { devServer } from '@cypress/react/plugins/react-scripts'

export default defineConfig({
  component: {
    devServer,
    specPattern: 'src/**/*.cy.tsx'
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts'
  }
})