import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "../ui/button"

export interface LinkButtonProps {
  link: string,
  children: React.ReactNode,
  variant?: VariantProps<typeof buttonVariants>,
};
