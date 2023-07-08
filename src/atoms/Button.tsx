import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  disabled: boolean;
}

export const Button = observer<ButtonProps>(
  ({ className, children, disabled, ...props }) => {
    return (
      <button
        className={clsx(
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
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
