import 'css-loader!./index.css';

export const mixinUI = () => {
  const H2 = document.createElement('h2');
  H2.innerHTML = 'Webpack';
  H2.setAttribute('className', 'title');
  document.body.appendChild(H2);
};

mixinUI();
