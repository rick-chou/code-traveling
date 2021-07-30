import React, {FC} from 'react';
import res from '@res';
import {TouchableHighlight, Image, View} from 'react-native';

const App: FC = () => {
  return (
    <View>
      <TouchableHighlight>
        <Image source={res.avatar} />
      </TouchableHighlight>
    </View>
  );
};

export default App;
