import { test, expect } from '@fixtures/test-base';
import DataGenerator from '@utils/DataGenerator';

test.describe('TTACart - E2E Checkout', () => {
	test.beforeEach(async ({ loginPage, inventoryPage }) => {
		await loginPage.open();
		await loginPage.loginAs('standard_user', 'tta_secret');
		await inventoryPage.assertLoaded();
	});

	test('completes checkout flow with one item @e2e', async ({
		inventoryPage,
		cartPage,
		checkoutStepOnePage,
		checkoutStepTwoPage,
		checkoutCompletePage,
	}) => {
		await inventoryPage.addToCart('tta-practice-backpack');
		await inventoryPage.openCart();

		await cartPage.assertLoaded();
		await expect(await cartPage.rowCount()).toBe(1);

		await cartPage.checkout();
		await checkoutStepOnePage.assertLoaded();

		const guest = DataGenerator.checkoutCustomer();
		await checkoutStepOnePage.fillGuest(guest);
		await checkoutStepOnePage.continue();

		await checkoutStepTwoPage.assertLoaded();
		await checkoutStepTwoPage.finish();

		await checkoutCompletePage.assertOrderComplete();
	});
});
