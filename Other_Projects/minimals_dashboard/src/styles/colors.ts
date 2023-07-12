export const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  black: "#0F1317",
};

export const colors = {
  text: {
    primary: "#fff",
    secondary: GREY[500],
    disabled: GREY[600],
    black: GREY["black"],
    danger: "#FFC107",
  },
  background: {
    paper: "#171C20",
    default: GREY[900],
    white: "#fff",
    black: GREY["black"],
    gray: GREY[700],
  },
  action: {
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  border: {
    primary: "#F9FAF8",
  },
};
