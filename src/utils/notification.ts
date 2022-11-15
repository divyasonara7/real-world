import { notify } from "@kyvg/vue3-notification";

export const notifyErrors = (errors: string[]): void => {
  notify({
    type: "error",
    title: "Error occurred",
    text: errors.join("<br />"),
  });
};

export const notifySuccess = (message: string): void => {
  notify({
    type: "success",
    text: message,
  });
};

export const notifyWarn = (message: string): void => {
  notify({
    type: "warn",
    text: message,
  });
};
