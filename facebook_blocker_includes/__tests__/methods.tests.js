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

    it('returns true for word in list in hashtag', () => {
        var input = 'this is a #testfoo in the string';
        var result = methods.check('foo', input);

        expect(result).toEqual(true);
    })

    it('returns false for word in url', () => {
        var input = 'this is a http://testfoo in the string';
        var result = methods.check('foo', input);

        expect(result).toEqual(false);
    })
})
