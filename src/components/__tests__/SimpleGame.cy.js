import ScoreTable from '../match/ScoreTable.vue'

describe('this is a simple game test', () => {
  it('simple game with initial score status', () => {
    cy.mount(ScoreTable)
    cy.get('[data-cy=score-status]').should('have.text', 'Still playing...')
  })

  it('should get a 3-3 score status', () => {
    cy.mount(ScoreTable)
    cy.get('[data-cy="player1-counter"]').get('button').should('have.text', 'Still playing...')
  })
})
