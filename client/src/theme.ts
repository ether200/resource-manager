import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: "Nunito, sans-serif",
    heading: "Montserrat, sans-serif",
    mono: "Nunito, sans-serif",
  },
  colors: {
    primary: theme.colors.twitter,
    secondary: theme.colors.yellow,
  },
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          backgroundColor: `${props.colorScheme}.800`,
          color: "white",
          _hover: {
            backgroundColor: `${props.colorScheme}.900`,
          },
        }),
      },
      secondary: {
        backgroundColor: "primary.400",
        color: "white",
        _hover: {
          backgroundColor: "primary.500",
        },
      },
    },
  },
});
