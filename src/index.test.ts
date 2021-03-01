import index from './index';

describe('index', () => {
  it('should return the expected string', async () => {
    const res = await index();
    expect(res).toMatchSnapshot();
  });
});
