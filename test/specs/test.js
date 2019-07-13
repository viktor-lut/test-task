import { assert } from 'chai';

  describe('Order', function () {

    it('case-1', function () {
      browser.url('/');
     // $('.j-dropdown__link').moveTo();
      browser.pause(200);
      $('span.btn.btn_yes.js-location-message__close').click();
      $('#ui-id-2 > ul > li:nth-child(1) > a').click();
      let sect = $('.view-content').isDisplayed();
      assert.isTrue(sect);
    });

    it('case-2', function () {
      let selb = $('/html/body/div[1]/div/div[4]/div[2]/div[4]/div/div[1]/div[6]/a');
      selb.click();
      let sel = $('.b-product-box');
      let box = sel.isDisplayed();
      assert.isTrue(box);
    });



  });
