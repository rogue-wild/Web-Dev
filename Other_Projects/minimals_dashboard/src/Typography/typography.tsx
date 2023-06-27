import React from "react";
import "./typography.css";

type VariantMapping = {
  [key: string]: keyof JSX.IntrinsicElements;
};

const variantsMapping: VariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  text1: "p",
  text2: "p",
};

type TypographyProps = {
  variant: keyof typeof variantsMapping;
  children: React.ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({ variant, children, className, ...props }) => {
  const Component = variantsMapping[variant as keyof typeof variantsMapping] || "p";
  const classNames = `typography--variant-${variant} ${className || ""}`;

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
