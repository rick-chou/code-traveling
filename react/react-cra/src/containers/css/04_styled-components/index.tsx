import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
    <div className='container'>
      <Title>Header</Title>
    </div>
  );
};

export default App;
