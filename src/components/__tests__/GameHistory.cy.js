import ScoreTable from '../match/ScoreTable.vue'

describe('this should make the game history visible', () => {
  it('simple game with initial score status', () => {
    cy.mount(ScoreTable)
    cy.get('[data-cy=score-status]').should('have.text', 'Still playing...')
  })

  it('should get a 11 - 0 score status', () => {
    cy.mount(ScoreTable)

    for (let i = 0; i <= 10; i++) {
      cy.get('[data-cy="increment-btn-1"]').click()
    }
    cy.get('[data-cy=score-status]').should('have.text', 'Winner is 1')

    cy.get('[data-cy="reset-score-btn"]').should('be.visible')
    cy.get('[data-cy="reset-score-btn"]').click()

    cy.get('.game-history-1').should('be.visible')
  })
})
