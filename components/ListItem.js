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

const ListItem = ({item, handleOnpress}) => {
  return (
    <TouchableOpacity onPress={handleOnpress}>
      <View style={styles.item}>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
          style={styles.itemPhoto}
          resizeMode="cover">
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                marginLeft: 20,
                marginBottom: 10,
                width: 100,
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(39, 228, 245, 0.40)',
                  padding: 3,
                  marginBottom: 5,
                }}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: 'cyan'}}>
                  Fantasy
                </Text>
              </View>
              <View
                style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginLeft: 5}}
                />
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginLeft: 5}}
                />
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginLeft: 5}}
                />
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginLeft: 5}}
                />
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginLeft: 5}}
                />
              </View>
              <Text style={styles.itemText}>{item.original_title}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    margin: 5,
    height: 100,
  },
  itemPhoto: {
    width: 150,
    height: 200,
  },
  itemText: {
    color: 'white',
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ListItem;
