import { Theme } from "@aws-amplify/ui-react";

const theme: Theme = {
  name: "my-theme",
  tokens: {
    components: {
      heading: {
        color: { value: '#002868' },
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
      },
      button: {
        color: { value: '#fff' },
        backgroundColor: { value: '#002868' },
      },
      input: {
        color: { value: '#002868' },
      },
      select: {
        color: { value: '#002868' },
      },
    },
    colors: {
      font: {
        primary: { value: "#002868" },
        secondary: { value: "#fff" },
      },
      background: {
        primary: { value: "#fff" },
        secondary: { value: "#002868" },
        tertiary: { value: "#f5f8fa" },
      },
    },
  },
};

export default theme;
