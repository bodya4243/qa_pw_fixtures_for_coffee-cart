import { test } from '../fixtures/fixtures';
import { priceFormatStr, unitPriceFormatStr} from '../../src/common/getPriseForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(unitPriceFormatStr(19.00, 1));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(19.00));
});
