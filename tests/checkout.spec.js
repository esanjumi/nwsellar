import { test, expect } from '@playwright/test';

// Function to generate random name and email with specified domains
function generateRandomData() {
  const randomString = Math.random().toString(36).substring(2, 10);
  const name = `User_${randomString}`;

  // Array of email domains
  const emailDomains = ['@fastermail.com', '@yahoo.com', '@webmail.com'];
  const randomEmailDomain = emailDomains[Math.floor(Math.random() * emailDomains.length)];

  const email = `user_${randomString}${randomEmailDomain}`;
  return { name, email };
}

// Configure Playwright to run tests in parallel
const TOTAL_CHECKOUTS = 1000; // Total number of checkouts to perform
const PARALLEL_INSTANCES = 10; // Number of parallel threads to use

// Split the checkouts across the instances
test.describe('Automate checkouts in parallel', () => {
  for (let instance = 0; instance < PARALLEL_INSTANCES; instance++) {
    test(`Parallel Checkout Instance ${instance + 1}`, async ({ page }) => {
      // Calculate the range of checkouts for this instance
      const start = Math.floor((TOTAL_CHECKOUTS / PARALLEL_INSTANCES) * instance);
      const end = Math.floor((TOTAL_CHECKOUTS / PARALLEL_INSTANCES) * (instance + 1));

      for (let i = start; i < end; i++) {
        const { name, email } = generateRandomData();
        console.log(`Instance ${instance + 1} - Checkout ${i + 1} with Name: ${name}, Email: ${email}`);

        try {
          // Navigate to the target page
          await page.goto('https://selar.co/Agric-TechVol1');

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

          console.log(`Instance ${instance + 1} - Checkout ${i + 1} completed with Name: ${name}, Email: ${email}`);

          // Optional: Wait a moment to prevent too rapid requests
          await page.waitForTimeout(2000); // Adjust the delay as necessary

        } catch (error) {
          console.error(`Instance ${instance + 1} - Error during checkout ${i + 1}: ${error.message}`);
          continue;
        }
      }
    });
  }
});
