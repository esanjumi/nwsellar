import { test, expect } from '@playwright/test';

// Function to generate random name and email
function generateRandomData() {
  const randomString = Math.random().toString(36).substring(2, 10);
  const name = `User_${randomString}`;
  const email = `user_${randomString}@example.com`;
  return { name, email };
}

// Increase timeout for the entire test
test.setTimeout(0);  // Disable the timeout (no limit)

test('Automate 1000 checkouts with random names and emails', async ({ page }) => {
  const TOTAL_CHECKOUTS = 1000;

  // Loop to run the checkout process 1000 times
  for (let i = 0; i < TOTAL_CHECKOUTS; i++) {
    const { name, email } = generateRandomData();
    console.log(`Starting checkout ${i + 1} with Name: ${name}, Email: ${email}`);

    try {
      // Navigate to the target page
      await page.goto('https://selar.co/Agric-TechVol3');

      // Click on the 'Get now' button
      await page.locator('button', { hasText: 'Get now' }).click();

      // Wait for item details page to load
      await page.locator('.flex-shrink-0 > .flex').click();

      // Wait for the form to be ready
      await page.waitForSelector('input[placeholder="Full name"]');
      await page.waitForSelector('input[placeholder="example@gmail.com"]');

      // Fill out the form with random name and email
      await page.locator('input[placeholder="Full name"]').fill(name);
      await page.locator('input[placeholder="example@gmail.com"]').fill(email);

      // Complete the checkout (click the confirmation button)
      await page.locator('#checkout > div:nth-child(3) > div').first().click();

      console.log(`Checkout ${i + 1} completed with Name: ${name}, Email: ${email}`);

      // Optional: Wait a moment to prevent too rapid requests
      await page.waitForTimeout(2000); // Adjust the delay as necessary

    } catch (error) {
      console.error(`Error during checkout ${i + 1}: ${error.message}`);
      continue;
    }
  }

  console.log('Automation completed!');
});
