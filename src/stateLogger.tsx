const log = console.log;
// @ts-ignore
export const framerLogger = (label) => log(`%c${label}: animation complete`, "color: red");
// @ts-ignore
export const stateLogger = (label, mounted) => {
  mounted
    ? log(`%c${label}: mounted`, "color: green")
    : log(`%c${label}: unmounted`, "color: orange");
};