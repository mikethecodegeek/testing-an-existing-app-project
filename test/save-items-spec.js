const { expect } = require('chai');
const { saveItems } = require('../save-items');
describe("The saveItems function", () => {
    let items = ['One','Two','Three']
    let itemsRef = items;
  it('adds the new item to the list', () => {
     saveItems(items,'Four');
     expect(items).to.eql(['One','Two','Three','Four'])
  });

  it('makes sure the result and the original are different', () => {
    expect(saveItems(items,'Four')).to.not.equal(itemsRef)
  });
});
