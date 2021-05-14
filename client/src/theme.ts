import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  colors: {
    primary: theme.colors.twitter,
    secondary: theme.colors.yellow,
  },
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          backgroundColor: `${props.colorScheme}.600`,
          color: "white",
          _hover: {
            backgroundColor: `${props.colorScheme}.700`,
          },
        }),
      },
    },
  },
});
