import index from './index';

describe('index', () => {
  it('should return the expected string', () => {
    expect(index()).resolves.toMatchSnapshot();
  });
});
