import { compose } from 'redux';

const toUpper = (str: string) => {
  return str.toUpperCase();
};

const reverse = (...str: string[]) => {
  return str.reverse().join();
};

// const combin = compose(toUpper, reverse);

// console.log(combin('hello'));

export default function App() {
  return <>Compose</>;
}
