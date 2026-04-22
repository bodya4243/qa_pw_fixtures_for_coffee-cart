import { test } from '../fixtures/fixtures';
import {priceFormatStr} from '../../src/common/getPriseForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();
  await menuPage.assertEspressoCupCostHasValue(priceFormatStr(10.00));
});
