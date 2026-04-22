import { test } from '../fixtures/fixtures';
import {priceFormatStr} from '../../src/common/getPriseForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
    menuPage,
    cartPage
}) => {
    await menuPage.open();
    await menuPage.clickCappucinoCup();
    await menuPage.clickEspressoCup();
    await menuPage.clickAmericanoCup();

    await menuPage.assertPromoMessageIsVisible();

    await menuPage.clickYesPromoButton();

    await menuPage.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(10.00));
    await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(4.00));
    await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(19.00));
    await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(7.00));
});
