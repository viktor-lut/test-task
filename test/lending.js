import { assert } from 'chai';

describe('Lending', function () {

  describe('Page Level', function () {

    it('Get title', function () {
      browser.url('/');
      let title = browser.getTitle();
      assert.equal(title, '32/05 Team');
    });

    it('Favicon', function () {
      browser.url('https://static.tildacdn.com/tild3163-3936-4237-b862-646639363937/favicon.ico');
      let icon = $('img');
      let width = icon.getCSSProperty('width').parsed.value;
      let height = icon.getCSSProperty('height').parsed.value;
      let size = `${width}x${height}`;
      assert.equal(size, '64x64');
    })

  });

  describe('Elements exist', function () {

    it('Allrecords', function () {
      browser.url('/');
      let allrec = $('#allrecords').isDisplayed();
      assert.equal(allrec, true);
    });

    it('Logo is displayed', function () {
      let logo = $('#rec63454432 > div > div > div.t-col.t-col_3.t-prefix_1.t-align_center > img').isDisplayed();
      assert.equal(logo, true);
    });

    it('Logo size', function () {
      let logo = $('#rec63454432 > div > div > div.t-col.t-col_3.t-prefix_1.t-align_center > img');
      let width = logo.getCSSProperty('width').parsed.value;
      let height = logo.getCSSProperty('height').parsed.value;
      let size = `${width}x${height}`;
      assert.equal(size, '260x120.488');
    });

    it('Footer', function () {
      let header = $('#rec63454443').isDisplayed();
      assert.equal(header, true);
    })

  });

  describe('Unit rec63454433', function () {

    let sel = '#rec63454433 > div > div > div > div.t488__descr.t-title.t-title_xl > div';

    it('Unit is displayed', function () {
      let unit = $('#rec63454433').isDisplayed();
      assert.equal(unit, true);
    });

    it('Describe is displayed', function () {
      let describe = $(sel).isDisplayed();
      assert.equal(describe, true);
    });

    it('Text includes', function () {
      let text = $(sel).getText();
      assert.equal(text, '17 people in the USA, Russia and Ukraine make products for 100 million users. Over the past 7 years, the team has made 6 programs and applications for working with video, 4 of which led to a sustained advantage.');
    });

    it('Text align', function () {
      let textAlign = $(sel).getCSSProperty('text-align').value;
      assert.equal(textAlign, 'left');
    });

    it('Background color', function () {
      let bgColor = $(sel).getCSSProperty('background-color').value;
      assert.equal(bgColor, 'rgba(0,0,0,0)');
    });

    it('Font size', function () {
      let fontSize = $(sel).getCSSProperty('font-size').value;
      assert.equal(fontSize, '38px')
    });

    it('Line height', function () {
      let fontSize = $(sel).getCSSProperty('line-height').value;
      assert.equal(fontSize, '52px')
    });

    it('Font Family', function () {
      let fontFamily = $(sel).getCSSProperty('font-family').value;
      assert.equal(fontFamily, 'ibm plex sans')
    });

    it('Font Weight', function () {
      let fontWeight = $(sel).getCSSProperty('font-weight').value;
      assert.equal(fontWeight, '600');
    });

    it('Font Color', function () {
      let fontColor = $(sel).getCSSProperty('color').parsed.hex;
      assert.equal(fontColor, '#333333');
    });

  });

});