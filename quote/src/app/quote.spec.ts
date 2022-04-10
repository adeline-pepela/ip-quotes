import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote( Id,"name", "description","author",Date,'likes','dislikes')).toBeTruthy();
  });
});
