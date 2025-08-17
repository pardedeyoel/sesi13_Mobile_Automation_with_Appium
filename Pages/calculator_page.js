class CalculatorPage {
  // Locator tombol
  get digit0() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_0']"); }
  get digit1() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_1']"); }
  get digit2() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_2']"); }
  get digit3() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_3']"); }
  get digit4() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_4']"); }
  get digit5() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_5']"); }
  get digit6() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_6']"); }
  get digit7() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_7']"); }
  get digit8() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_8']"); }
  get digit9() { return $("//android.widget.Button[@resource-id='com.oneplus.calculator:id/digit_9']"); }
  

  //locator operator
  get plus() { return $('//android.widget.ImageButton[@content-desc="plus"]'); }
  get minus() { return $('//android.widget.ImageButton[@content-desc="minus"]'); }
  get multiply() { return $('//android.widget.ImageButton[@content-desc="×"]'); }
  get divide() { return $('//android.widget.ImageButton[@content-desc="divide"]'); }
  get equals() { return $('//android.widget.ImageButton[@content-desc="equals"]'); }
  get clear() { return $('//android.widget.ImageButton[@content-desc="clear"]'); }
  
   //locator hasil
  get resultField() { 
    return $('//android.widget.TextView[@resource-id="com.oneplus.calculator:id/result"]'); 
    }

    //clear dulu angka nya sebelum mulai test
    async clearScreen() {
    if (await this.clear.isDisplayed()) {
      await this.clear.click();
    }
  }

  async getResultText() {
    return await this.resultField.getText();
  }
}

//module.exports = CalculatorPage;

export default new CalculatorPage();