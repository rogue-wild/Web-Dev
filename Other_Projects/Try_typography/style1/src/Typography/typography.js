import React from "react";
import cn from "classnames";
import "./typography.css";

const variantsMapping = {
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

const Typography = ({
  variant,
  color,
  align,
  display,
  marginBottom,
  children,
  ...props
}) => {
  const Component = variant ? variantsMapping[variant] : "p";

  const classNames = cn({
    [`typography--variant-${variant}`]: variant,
    [`typography--color-${color}`]: color,
    [`typography--align-${align}`]: align,
    [`typography--display-${display}`]: display,
    [`typography--margin-bottom-${marginBottom}`]: marginBottom,
  });

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
