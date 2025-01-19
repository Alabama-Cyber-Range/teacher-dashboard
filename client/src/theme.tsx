import { Theme } from "@aws-amplify/ui-react";

const theme: Theme = {
  name: "my-theme",
  tokens: {
    components: {
      heading: {
        color: { value: '{colors.blue.80}' },
        1: {
          fontSize: { value: '{fontSizes.xxl}' },
          fontWeight: { value: '{fontWeights.bold}' },
        },
        2: {
          fontSize: { value: '{fontSizes.xl}' },
          fontWeight: { value: '{fontWeights.bold}' },
        }
      },
      text: {
        color: { value: '#002868' },
      }
    },
    colors: {
      font: {
        primary: { value: "#002868" },
        secondary: { value: "#fff" },
      },
      background: { secondary: "#f5f8fa" },
    },
  },
};

export default theme;
