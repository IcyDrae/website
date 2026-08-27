import { test, expect } from '@playwright/test'

test('homepage loads without console errors', async ({ page }) => {
  const consoleErrors = []

  page.on('console', message => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text())
    }
  })

  page.on('pageerror', error => {
    consoleErrors.push(error.message)
  })

  await page.goto('/')

  await expect(page).toHaveTitle(/./)

  expect(consoleErrors).toEqual([])
})

test('posts are clickable and navigable', async ({ page }) => {
  await page.goto('/')

  const post = page.locator('.post').first()

  await expect(post).toBeVisible()

  await post.click()

  await expect(page).toHaveURL(/\/posts\/.+/)
})

test('post page loads at the top', async ({ page }) => {
  await page.goto('/posts/proof-of-work-cybersecurity')

  await expect(page).toHaveURL(/\/posts\/proof-of-work-cybersecurity/)

  expect(await page.evaluate(() => window.scrollY)).toBe(0)
})
