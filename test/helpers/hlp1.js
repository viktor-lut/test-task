class getTextEl {

  getPoint() {
    browser.url('/');
    browser.pause(200);
  //  $('span.btn.btn_yes.js-location-message__close').click();
    $('#ui-id-2 > ul > li:nth-child(1) > a').click();
    let cl = $('/html/body/div[1]/div/div[4]/div[2]/div[4]/div/div[1]/div[5]/span[1]').getText();
    return cl;
  }
}

export default new getTextEl();