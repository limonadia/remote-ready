import { test, expect } from '@playwright/test'

test('homepage loads and shows jobs', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Remote Ready Job Board/)
  await expect(page.locator('h2')).toHaveCount(2)
})
