const ack = require('./../../index');

describe('Ackermann function', () => {
  it('calculates ack(3, 0)', () => {
    const output = ack(3, 0);
    expect(output).toBe(5);
  });

  it('calculates ack(3, 1)', () => {
    const output = ack(3, 1);
    expect(output).toBe(13);
  });
});
