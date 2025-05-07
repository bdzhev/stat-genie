import { LinkButtonProps } from "./LinkButton.props";
import Link from "next/link";
import { Button } from "../ui/button";

export const LinkButton = (props: LinkButtonProps) => {
  const { link, children, variant = 'default' } = props;

  return (
    <Link href={link}>
      <Button>
        {children}
      </Button>
    </Link>
  )
};
