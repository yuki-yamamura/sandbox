import { expect, test } from '@playwright/test';

import type { Locator } from '@playwright/test';

let fields: {
  emailInput: Locator;
  passwordInput: Locator;
  submitButton: Locator;
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');

  fields = {
    emailInput: page.getByRole('textbox', { name: 'Email' }),
    passwordInput: page.getByLabel('Password'),
    submitButton: page.getByRole('button', { name: 'Submit' }),
  };
});

test.describe('SignUpForm', () => {
  test('should render the basic fields', async () => {
    const { emailInput, passwordInput, submitButton } = fields;

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test.describe('happy path', () => {
    test.describe('if a user enters required fields, then click the submit button', () => {
      test('should call a callback with an object having an email and password', async () => {
        const { emailInput, passwordInput, submitButton } = fields;

        await emailInput.clear();
        await emailInput.fill('alice@example.com');
        await passwordInput.clear();
        await passwordInput.fill('my-secret');

        await submitButton.click();
      });
    });
  });

  test.describe('unhappy path', () => {
    test.describe('if a user forgot to enter an email, then click the submit button', () => {
      test('should tell a user that an email is required', async ({ page }) => {
        const { passwordInput, submitButton } = fields;

        await passwordInput.clear();
        await passwordInput.fill('my-secret');

        // There's no alert before submitting.
        await expect(page.getByText('Email is required.')).not.toBeVisible();

        // After submitting, the alert appears.
        await submitButton.click();
        await expect(page.getByText('Email is required.')).toBeVisible();
      });
    });

    test.describe('if a user forgot to enter a password, then click the submit button', () => {
      test('should tell a user that a password is required', async ({
        page,
      }) => {
        const { emailInput, submitButton } = fields;

        await emailInput.clear();
        await emailInput.fill('alice@example.com');

        // There's no alert before submitting.
        await expect(page.getByText('Password is required')).not.toBeVisible();

        // After submitting, the alert appears.
        await submitButton.click();
        await expect(page.getByText('Password is required')).toBeVisible();
      });
    });

    test.describe('if a user enter password that is shorter than 8 characters', () => {
      test('should warn a user to enter password at least 8 characters', async ({
        page,
      }) => {
        const { emailInput, passwordInput, submitButton } = fields;

        await emailInput.clear();
        await emailInput.fill('alice@example.com');
        await passwordInput.clear();
        // 'secret' is too short to use it as a password
        await passwordInput.fill('secret');

        // There's no alert before submitting.
        await expect(
          page.getByText('Password must be at least 8 characters.'),
        ).not.toBeVisible();

        // After submitting, the alert appears.
        await submitButton.click();
        await expect(
          page.getByText('Password must be at least 8 characters.'),
        ).toBeVisible();
      });
    });
  });
});
