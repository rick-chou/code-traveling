import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '@store/redux/home/actionCreators';
import { Button } from 'antd';

interface IProps {
  username: string;
  setUsername: (username: string) => void;
}

const Home = (props: IProps) => {
  const { username, setUsername } = props;

  return (
    <div>
      <h1>Home</h1>
      <h2>{username}</h2>
      <Button onClick={() => setUsername('NanShu')}>change name</Button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  username: state.home.username,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUsername: (payload: string) => dispatch(ACTIONS.setUsername(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
