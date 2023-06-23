import React from 'react';
import styles from './Typography.module.css';

const Typography = () => {
  const getVariantStyle = (variant) => {
    switch (variant) {
      case 'heading':
        return styles.heading;
      case 'subheading':
        return styles.subheading;
      case 'button':
        return styles.button;
      case 'cardTitle':
        return styles.cardTitle;
      case 'cardContent':
        return styles.cardContent;
      default:
        return null;
    }
  };

  const TypographyElement = ({ variant, children }) => {
    const variantStyle = getVariantStyle(variant);
    if (!variantStyle) {
      return null;
    }

    return <span className={variantStyle}>{children}</span>;
  };

  return (
    <div className={styles.container}>
      <TypographyElement variant="heading">Welcome to My Website</TypographyElement>
      <TypographyElement variant="subheading">Explore and Discover</TypographyElement>

      <TypographyElement variant="button">Click Me</TypographyElement>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <TypographyElement variant="cardTitle">Card 1</TypographyElement>
          <TypographyElement variant="cardContent">
            This is the content of Card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypographyElement>
        </div>

        <div className={styles.card}>
          <TypographyElement variant="cardTitle">Card 2</TypographyElement>
          <TypographyElement variant="cardContent">
            This is the content of Card 2. Nullam feugiat sem at ligula eleifend lacinia.
          </TypographyElement>
        </div>

        <div className={styles.card}>
          <TypographyElement variant="cardTitle">Card 3</TypographyElement>
          <TypographyElement variant="cardContent">
            This is the content of Card 3. Vivamus nec est non enim mattis eleifend.
          </TypographyElement>
        </div>
      </div>
    </div>
  );
};

export default Typography;
