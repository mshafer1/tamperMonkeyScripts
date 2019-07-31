const methods = require('../methods.js');

test('Can get check', () => {
    expect(methods).toBeDefined();
    expect(methods.check).toBeDefined();
  });

describe('Check', () => {
    it('returns true for word in list', () => {
        var input = "test foo item";
        var result = methods.check("foo", input);

        expect(result).toEqual(true);
    })
})