import { test } from '../fixtures/fixtures';
import { priceFormatStr, unitPriceFormatStr} from '../../src/common/getPriseForQuantity';

test('Check Espresso correctly added to the Cart', async ({ menuPage, cartPage }) => {
      
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(unitPriceFormatStr(10.00, 1));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(10.00));
});