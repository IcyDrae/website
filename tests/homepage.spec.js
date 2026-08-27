import { test, expect } from '@playwright/test'

test('homepage has no runtime errors or failed resources', async ({ page }) => {
  const consoleErrors = []
  const failedRequests = []

  const ignoredDomains = [
    'consentcdn.cookiebot.com',
    'google-analytics.com',
  ]

  page.on('console', message => {
    if (message.type() === 'error') {
      const text = message.text()

      // Ignore generic browser messages caused by failed third-party requests.
      if (!text.includes('Failed to load resource')) {
        consoleErrors.push(text)
      }
    }
  })

  page.on('pageerror', error => {
    consoleErrors.push(error.message)
  })

  page.on('response', response => {
    const url = response.url()

    if (
      response.status() >= 400 &&
      !ignoredDomains.some(domain => url.includes(domain))
    ) {
      failedRequests.push(`${response.status()} ${url}`)
    }
  })

  await page.goto('/')

  await expect(page).toHaveTitle(/./)

  console.log('FAILED REQUESTS:', failedRequests)
  console.log('CONSOLE ERRORS:', consoleErrors)

  expect(failedRequests).toEqual([])
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
