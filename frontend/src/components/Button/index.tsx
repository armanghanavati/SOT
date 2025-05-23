import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/tw-utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
  asChild?: boolean;
  icon?: any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      label,
      icon,
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        <span className="mx-1">{icon}</span>
        {label}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

const buttonVariants = cva(
  "inline-flex items-center no-underline justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 font-semibold focus-visible:ring-primary-disabled disabled:pointer-events-none disabled:opacity-50 text-",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white text-md shadow hover:bg-primary-hover hover:text-white",
        secondary:
          "bg-secondary !text-white shadow-sm hover:bg-secondary-hover",
        ghost: "text-mainBlack hover:text-mainGray-dark",
        link: "text-mainBlack text-lg underline-offset-4 px-3 hover:text-mainGray-dark",
        white:
          "bg-white border border-gray-300 text-gray-700 shadow-sm hover:bg-gray-100",
        outLine_default:
          "col-span-3 mt-8 border border-primary !text-primary hover:text-primary-hover",
        outLine: "col-span-3 mt-8 !text-primary hover:text-primary-hover !px-0",

        outLine_secondary: "bg-white !text-secondary shadow-sm",
        outLine_gray:
          "col-span-3 mt-5 border border-mainGray-dark text-mainGray-dark hover:text-mainGray-dark-hover",
        gray: "bg-mainGray",
      },
      size: {
        default: "text-sm px-[38px] py-1",
        full: "border-none text-base py-1.5 lg:py-3 w-full lg:text-lg",
        md: "text-base w-[136px] py-1 px-[45.5px]",
        sm: "lg:text-md lg:py-2 lg:px-8 px-8 py-1 text-mdd",
        smm: "lg:text-md lg:py-1 lg:px-8 px-2 py-0.5 text-smm lg:w-40 w-28 !m-0",
        xl: "text-md py-2 px-[75px]",
        xxl: "text-lg py-0 px-[109.5px]",
        lg: "text-lg py-3 px-[171px]",
        link: "px-0 text-lg",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
