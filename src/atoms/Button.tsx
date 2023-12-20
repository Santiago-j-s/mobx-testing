import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button = observer<ButtonProps>(
  ({ className, children, disabled, variant = 'solid', ...props }) => {
    return (
      <button
        className={clsx(
          'font-bold py-2 px-4 rounded',
          variant === 'outline' &&
            'border border-blue-500 hover:bg-blue-500 hover:text-white',
          variant === 'solid' && 'bg-blue-500 text-white hover:bg-blue-600',
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
