import './index.css';

const mixinUI = () => {
  const H2 = document.createElement('h2');
  H2.innerHTML = 'Webpack PostCSS';
  H2.className = 'title';
  document.body.appendChild(H2);
};

mixinUI();
