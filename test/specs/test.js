import { assert } from 'chai';



  describe('Order', function () {

    it('case-1', function () {
      browser.url('/');
      browser.pause(200);
      $('span.btn.btn_yes.js-location-message__close').click();
      $('#ui-id-2 > ul > li:nth-child(1) > a').click();
      let sect = $('.view-content').isDisplayed();

      const fs = require('fs');
      const filePath = '/projects/test/test/data/data.json';
      let data = fs.readFileSync(filePath, "utf-8");
      data = JSON.parse(data);
      data.nameP = $('/html/body/div[1]/div/div[4]/div[2]/div[4]/div/div[1]/div[1]/a').getText();
      data.typeP = $('/html/body/div[1]/div/div[4]/div[2]/div[4]/div/div[1]/div[2]/div/div/div').getText();
      data.priceP = $('/html/body/div[1]/div/div[4]/div[2]/div[4]/div/div[1]/div[3]').getText();
      data.stock = $('/html/body/div[1]/div/div[4]/div[2]/div[4]/div/div[1]/div[4]').getText();
      data.points = $('/html/body/div[1]/div/div[4]/div[2]/div[4]/div/div[1]/div[5]/span[1]').getText();

      fs.writeFileSync('/projects/test/test/data/data.json', JSON.stringify(data));
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

    it('case-3', function () {
      let selb = $$('.ui-spinner-button');
      selb[0].click();
      selb[0].click();
      let cnt = $('input#spinner.ui-spinner-input').getAttribute('aria-valuenow');

      const fs = require('fs');
      const filePath = '/projects/test/test/data/data.json';
      let data = fs.readFileSync(filePath, "utf-8");
      data = JSON.parse(data);

      data.cont = cnt;
      let prs = data.priceP;
      let sum = $('span.price').getText().slice(0,-4);
      let sumP = parseInt($('/html/body/div[1]/div/div[3]/div[2]/div[3]/div/div/p[2]/span[2]').getText(), 10);
      let pont = data.points;
      fs.writeFileSync('/projects/test/test/data/data.json', JSON.stringify(data));
      prs = prs.replace(/\s+/g, '').slice(0,-4).split(',').join('.');
      assert.equal((+cnt)*(+prs), +sum);
      assert.equal((+cnt)*(+pont), sumP);
    });

    it('case-4', function () {
      $('span.btn-buy.to-cart').click();
      let sel = $('#views-form-commerce-cart-form-cart-pane');
      sel.waitForDisplayed(5000);
      let box = sel.isDisplayed();
      assert.isTrue(box);
    });

    it('case-5', function () {
      $('#edit-edit-delete-0').click();
      let sel = $('#views-form-commerce-cart-form-cart-pane');
      sel.waitForDisplayed(5000);
      const fs = require('fs');
      const filePath = '/projects/test/test/data/data.json';
      let data = fs.readFileSync(filePath, "utf-8");
      data = JSON.parse(data);
      let name = $('#views-form-commerce-cart-form-cart-pane > div > table > tbody > tr > td.col-2.title > div > div.name > a').getText();
      assert.equal(name, data.nameP);
    });

    it('case-6', function () {
      const fs = require('fs');
      const filePath = '/projects/test/test/data/data.json';
      let data = fs.readFileSync(filePath, "utf-8");
      data = JSON.parse(data);
      let cnt = $('#edit-edit-quantity-0').getAttribute('value');
      assert.equal(cnt, data.cont);
    });

    it('case-7', function () {
      const fs = require('fs');
      const filePath = '/projects/test/test/data/data.json';
      let data = fs.readFileSync(filePath, "utf-8");
      data = JSON.parse(data);
      let price = $('#views-form-commerce-cart-form-cart-pane > div > table > tbody > tr > td.col-3.commerce-unit-price > span').getText();
      assert.equal(price, data.priceP);
    });

    it('case-8', function() {
      let prs = $('#views-form-commerce-cart-form-cart-pane > div > table > tbody > tr > td.col-3.commerce-unit-price > span').getText();
      prs = prs.replace(/\s+/g, '').slice(0,-4).split(',').join('.');
      let cnt = $('#edit-edit-quantity-0').getAttribute('value');
      let sum = $('#views-form-commerce-cart-form-cart-pane > div > div.b-total > div.pickup > div > div > div.value > div:nth-child(1)').getText();
      sum = sum.replace(/\s+/g, '').slice(0,-4).split(',').join('.');
      let points = $('#views-form-commerce-cart-form-cart-pane > div > table > tbody > tr > td.col-2.title > div > div.name').getAttribute('data-profi-points');
      let sumP = $('#views-form-commerce-cart-form-cart-pane > div > div.b-total > div.pickup > div > div > div.value > div.order-profi-points > span').getText();
      sumP = parseInt(sumP.replace(/\s+/g, ''), 10);
      assert.equal((+cnt)*(+prs), +sum);
      assert.equal((+cnt)*(+points), sumP);
    });

    it('case-9', function() {
      $('#edit-checkout').click();
      let sel = $('body > div.page > div > div.b-registration');
      sel.waitForDisplayed(5000);
      let box = sel.isDisplayed();
      assert.isTrue(box);
    });

    it('case-10', function() {
      $('#commerce-checkout-form-checkout > div > div > div.item.item-delivery.item-delivery.opened > div.item-content > div > div.b-form-inner > div.radio.by-hand > div.fake-radio.fake-radio-checked').click();
      $('#edit-customer-profile-shipping-string-address').setValue('Россия, Москва, Ленинский проспект, 18');
      $('#edit-customer-profile-shipping-delivery-submit-1').click();
      let sel = $('body > div.page > div > div.b-registration > div.reg-cart-content > div > div > div:nth-child(4) > div.value');
      sel.waitForDisplayed(5000);
      let box = sel.isDisplayed();
      assert.isTrue(box);
    });

    it('case-11', function() {
      let sumT = $('body > div.page > div > div.b-registration > div.reg-cart-content > div > div > div:nth-child(3) > div.value').getText();
      sumT = sumT.replace(/\s+/g, '').slice(0,-4).split(',').join('.');
      let sumP = $('body > div.page > div > div.b-registration > div.reg-cart-content > div > div > div:nth-child(4) > div.value').getText();
      sumP = sumP.replace(/\s+/g, '').slice(0,-4).split(',').join('.');
      let sumG = $('body > div.page > div > div.b-registration > div.reg-cart-content > div > div > div.total-bot > div.count > div.value').getText();
      sumG = sumG.replace(/\s+/g, '').slice(0,-4).split(',').join('.');
      assert.equal((+sumP)+(+sumT), +sumG);
    });

  });
