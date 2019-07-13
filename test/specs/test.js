import { assert } from 'chai';
import gt from "../helpers/hlp1";

  describe('Order', function () {

    it('case-1', function () {
      browser.url('/');
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
      sel.waitForDisplayed(5000);
      let box = sel.isDisplayed();
      assert.isTrue(box);
    });

    it('case-4', function () {
      let selb = $('a.ui-spinner-button.ui-spinner-up.ui-corner-tr.ui-button.ui-widget.ui-state-default.ui-button-text-only');
      selb.waitForDisplayed(5000);
      selb.click();
      selb.click();
      let cnt = $('input#spinner.ui-spinner-input').getAttribute('aria-valuenow');
      let prs = $('div.price.price1').getText();
      let sum = $('span.price').getText().slice(0,-4);
      let sumP = parseInt($('/html/body/div[1]/div/div[3]/div[2]/div[3]/div/div/p[2]/span[2]').getText(), 10);
      let pont = gt.getPoint();
      prs = prs.replace(/\s+/g, '').slice(0,-4).split(',').join('.');
      assert.equal((+cnt)*(+prs), +sum);
      assert.equal((+cnt)*(+pont), sumP);
    });

  });
