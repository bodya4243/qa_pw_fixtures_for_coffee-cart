import { test } from '../fixtures/fixtures';
import {priceFormatStr} from '../../src/common/getPriseForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();
  await menuPage.assertCappuccinoCupCostHasValue(priceFormatStr(19.00));
});
