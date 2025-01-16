export const getFnHandler = (path?: string) => {
  if (!path) return "services/functions/src/lambda.handler";

  return `services/functions/src/${path}/lambda.handler`;
};
