import { SSTConfig } from "sst";
import { Client } from "./stacks/Client";

export default {
  config(_input) {
    return {
      name: "admin-dashboard",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Client);
  },
} satisfies SSTConfig;
