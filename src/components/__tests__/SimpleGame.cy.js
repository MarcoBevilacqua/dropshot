import ScoreTable from '../match/ScoreTable.vue'

describe('this is a simple game test', () => {
  it('simple game with initial score status', () => {
    cy.mount(ScoreTable)
    cy.get('[data-cy=score-status]').should('have.text', 'Still playing...')
  })

  it('should get a 3-3 score status', () => {
    cy.mount(ScoreTable)
    cy.get('[data-cy="increment-btn-1"]').click().click().click()
    cy.get('[data-cy="increment-btn-2"]').click().click().click()

    cy.get('[data-cy="player1-counter"]').get('[data-cy="score-1"]').should('have.text', '3')
    cy.get('[data-cy="player2-counter"]').get('[data-cy="score-2"]').should('have.text', '3')
  })
})
