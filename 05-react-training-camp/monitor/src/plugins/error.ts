export const errPlugin = () => {
  window.addEventListener('error', (...args) => {
    console.log('error', args);
  });
};
