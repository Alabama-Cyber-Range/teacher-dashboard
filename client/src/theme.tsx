import { Theme } from "@aws-amplify/ui-react";

const theme: Theme = {
  name: "my-theme",
  tokens: {
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
