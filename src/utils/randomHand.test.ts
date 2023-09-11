import { randomHandOptions } from "./randomHand"

describe('randomHand', () => {
  it('should return one of: rock, paper, scissors', () => {
    const validOptions = [ 'Rock', 'Paper', 'Scissors' ]
    expect(validOptions).toContain(randomHandOptions())
  })
})