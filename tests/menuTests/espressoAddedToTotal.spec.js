import { test } from '../fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/getPriseForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({
    menuPage,
}) => {
    await menuPage.open();
    await menuPage.clickEspressoCup();

    await menuPage.assertTotalCheckoutContainsValue(
        totalPriceFormatStr('Espresso'),
    );
});
