import { expect, test } from '@playwright/test';

test('hello', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Hello, Bob!')).toBeVisible();
});
