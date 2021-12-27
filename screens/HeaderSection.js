import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  Image,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderSection = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          marginLeft: 10,
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginRight: 20,
        }}>
        <View style={{justifyContent: 'center', marginRight: 10}}>
          <Text style={{color: 'yellow', fontWeight: 'bold', fontSize: 12}}>
            See All
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Icon name="chevron-right" size={14} color="yellow" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSection;
