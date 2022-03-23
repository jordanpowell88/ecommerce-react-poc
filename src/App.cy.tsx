import { mount } from '@cypress/react';
import App from './App';

describe('AppComponent', () => {
    it('can mount the component with h2 containing products', () => {
        mount(<App />)
        cy.get('h2').contains('Products')
    })
})