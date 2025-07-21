import React from 'react';
import { View } from 'react-native';

export default function Ex01() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
<View style={{flex : 3 , backgroundColor: 'yellow'}} />
<View style={{flex : 3 , backgroundColor: 'green'}} />
<View style={{flex : 3 , backgroundColor: 'red'}} />
</View>
  );
}
