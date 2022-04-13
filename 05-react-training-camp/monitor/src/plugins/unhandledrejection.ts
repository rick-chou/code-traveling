export const unhandledrejectionPlugin = () => {
  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {}
  );
};
