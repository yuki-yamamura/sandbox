import SignUpForm from '.';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

const mockFn = jest.fn();
let user: UserEvent;
let fields: {
  emailInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
  submitButton: HTMLInputElement;
};

beforeEach(() => {
  mockFn.mockClear();
  user = userEvent.setup();

  render(<SignUpForm saveData={mockFn} />);
  fields = {
    emailInput: screen.getByRole('textbox', { name: 'Email' }),
    passwordInput: screen.getByLabelText('Password'),
    submitButton: screen.getByRole('button', { name: 'Submit' }),
  };
});

describe('SignUpForm', () => {
  test('should render the basic fields', () => {
    const { emailInput, passwordInput, submitButton } = fields;

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  describe('happy path', () => {
    describe('if a user enters required fields, then click the submit button', () => {
      test('should call a callback with an object having an email and password', async () => {
        const { emailInput, passwordInput, submitButton } = fields;

        await user.clear(emailInput);
        await user.type(emailInput, 'alice@example.com');
        await user.clear(passwordInput);
        await user.type(passwordInput, 'my-secret');

        await user.click(submitButton);

        expect(mockFn).toHaveBeenCalledWith({
          email: 'alice@example.com',
          password: 'my-secret',
        });
      });
    });
  });

  describe('unhappy path', () => {
    describe('if a user forgot to enter an email, then click the submit button', () => {
      test('should tell a user that an email is required', async () => {
        const { passwordInput, submitButton } = fields;

        await user.clear(passwordInput);
        await user.type(passwordInput, 'alice@example.com');

        // There's no alert before submitting.
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();

        // After submitting, the alert appears.
        await user.click(submitButton);
        expect(screen.getByRole('alert')).toHaveTextContent(
          'Email is required.',
        );
      });
    });

    describe('if a user forgot to enter a password', () => {
      test('should tell a user that a password is required', async () => {
        const { emailInput, submitButton } = fields;

        await user.clear(emailInput);
        await user.type(emailInput, 'alice@example.com');

        // There's no alert before submitting.
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();

        // After submitting, the alert appears.
        await user.click(submitButton);
        expect(screen.getByRole('alert')).toHaveTextContent(
          'Password is required.',
        );
      });
    });

    describe('if a user entered a password that is shorter than 8 characters', () => {
      test('should tell a user the minimum length of password', async () => {
        const { emailInput, passwordInput, submitButton } = fields;

        await user.clear(emailInput);
        await user.type(emailInput, 'alice@example.com');
        await user.clear(passwordInput);
        // 'secret' is too short to use it as a password
        await user.type(passwordInput, 'secret');

        // There's no alert before submitting.
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();

        // After submitting, the alert appears.
        await user.click(submitButton);
        expect(screen.getByRole('alert')).toHaveTextContent(
          'Password must be at least 8 characters.',
        );
      });
    });
  });
});
