import { expect, test } from '@playwright/test';

test('counter interactions work on the homepage', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const countValue = page.getByTestId('count-value');
  const decrementButton = page.getByTestId('decrement-btn');

  await expect(page.getByText('Simple Counter')).toBeVisible();
  await expect(countValue).toHaveText('0');
  await expect(decrementButton).toBeDisabled();

  await page.getByTestId('increment-btn').click();
  await expect(countValue).toHaveText('1');

  await page.getByTestId('increment-btn').click();
  await expect(countValue).toHaveText('2');

  await decrementButton.click();
  await expect(countValue).toHaveText('1');

  await page.getByTestId('clear-btn').click();
  await expect(countValue).toHaveText('0');
});

test('intentionally fails to prove CI blocks regressions', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await expect(page.getByTestId('count-value')).toHaveText('0');
  await page.getByTestId('increment-btn').click();
  await expect(page.getByTestId('count-value')).toHaveText('1');

  await expect(page.getByTestId('count-value')).toHaveText('3');
});
