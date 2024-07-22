import { PropsWithChildren } from "react";

interface HeaderTextProps extends PropsWithChildren {
  description?: string;
}

const HeaderText = ({ children, description }: HeaderTextProps) => (
  <div className="flex flex-col gap-2 pb-10">
    <h2 className="text-xl lg:text-2xl">{children}</h2>
    {description && (
      <p>
        <em>{description}</em>
      </p>
    )}
  </div>
);

export default HeaderText;
