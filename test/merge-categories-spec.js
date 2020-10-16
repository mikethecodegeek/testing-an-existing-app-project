const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      let result = mergeCategories(template,[],'li');
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.not.contain('<li>');
      expect(result).to.not.contain('</li>');
      expect(result).to.not.contain(`<!-- Content here -->`);
    });

    it("should return a single <li> for one category", () => {
      let result = mergeCategories(template,['Cat'],'li');
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.contain('<li>');
      expect(result).to.contain('</li>');
      expect(result).to.contain('<li>Cat</li>');
      expect(result).to.not.contain(`<!-- Content here -->`);
    });

    it("should return an <li> for each category", () => {
      let result = mergeCategories(template,['Cat','Dog','Snail'],'li');
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<ul>');
      expect(result).to.contain('</ul>');
      expect(result).to.contain('<li>');
      expect(result).to.contain('</li>');
      expect(result).to.contain('<li>Cat</li>');
      expect(result).to.contain('<li>Dog</li>');
      expect(result).to.contain('<li>Snail</li>');
      expect(result).to.not.contain(`<!-- Content here -->`);
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      let result = mergeCategories(template,[],'option');
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.not.contain('<option>');
      expect(result).to.not.contain('</option>');
      expect(result).to.not.contain(`<!-- Content here -->`);
    });

    it("should return a single <option> for one category", () => {
      let result = mergeCategories(template,['Cat'],'option');
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.contain('<option>');
      expect(result).to.contain('</option>');
      expect(result).to.contain('<option>Cat</option>');
      expect(result).to.not.contain(`<!-- Content here -->`);
    });

    it("should return an <option> for each category", () => {
      let result = mergeCategories(template,['Cat','Dog','Snail'],'option');
      expect(result).to.contain('<div>');
      expect(result).to.contain('</div>');
      expect(result).to.contain('<select>');
      expect(result).to.contain('</select>');
      expect(result).to.contain('<option>');
      expect(result).to.contain('</option>');
      expect(result).to.contain('<option>Cat</option>');
      expect(result).to.contain('<option>Dog</option>');
      expect(result).to.contain('<option>Snail</option>');
      expect(result).to.not.contain(`<!-- Content here -->`);
    });
  });
});
