import { assert } from 'chai';
import mergeImg from 'merge-img';
const { addStep, addAttachment } = require('@wdio/allure-reporter').default;
import data from '../../data/compare';




describe('Full Page Screenshots', function () {

  // it('should save some screenshots', () => {
  //
  //   browser.url('/');
  //   // // Save a screen
  //   $('#rec63454443').scrollIntoView();
  //   browser.saveScreen(`${data.screenPath}${data.basePath}${data.listFooter}.png`);
  //
  //   // Save an element
  //  // $('#rec63454443').scrollIntoView();
  // //  browser.saveElement($('#rec63454443'), `${data.screenPath}${data.basePath}${data.listFooter}.png`);
  //
  //   // Save a full page screens
  //   browser.saveFullPageScreen(`${data.screenPath}${data.basePath}${data.fullpage}.png`);
  // });

  it('FullPage', function () {
    browser.url('/');
    $('#allrecords').waitForDisplayed();
    let res = browser.checkFullPageScreen('FullPage');
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.fullpage}.png`,
        `${data.screenPath}${data.actPath}${data.fullpage}.png`,
        `${data.screenPath}${data.diffPath}${data.fullpage}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.fullpage}.png`);
          addStep('Test step', 'this is body', 'failed');
          addAttachment(`${data.mergePath}${data.fullpage}.png`, `${data.mergePath}${data.fullpage}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.listFooter, function () {
    $('#rec63454443').scrollIntoView();
    let res = browser.checkScreen(data.listFooter);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.listFooter}.png`,
        `${data.screenPath}${data.actPath}${data.listFooter}.png`,
        `${data.screenPath}${data.diffPath}${data.listFooter}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.data.data.listFooter}.png`);
        });
    }
    assert.equal(res, 0);
  });

});

