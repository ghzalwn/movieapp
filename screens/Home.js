import axios from 'axios';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ListItem from '../components/ListItem';
import HeaderSection from './HeaderSection';

const HomeScreen = ({navigation}) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const getMovies = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=f292d58f8d80bff645c5281987b2e2d2',
    );

    if (response.status == 200) {
      setData(response.data.results);
      setLoading(false);
      console.log('datanya masuk ' + data[0]);
    } else {
      setError('something went wrong');
      setLoading(false);
    }
    console.log(response);
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error !== '') {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1}}>
        {/* <Header /> */}

        <ImageBackground
          style={{height: 250, width: '100%', backgroundColor: 'black'}}
          source={{
            uri:
              data.length !== 0
                ? `https://image.tmdb.org/t/p/w500/${data[0].poster_path}`
                : 'https://image.tmdb.org/t/p/w500//1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg',
            height: '20%',
            width: '100%',
          }}>
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View
              style={{
                position: 'absolute',
                top: 100,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: 'flex-start',
                marginLeft: 20,
                // marginTop: 10,
                width: 150,
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(39, 228, 245, 0.40)',
                  padding: 3,
                }}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: 'cyan'}}>
                  Fantasy
                </Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 20,
                marginTop: 60,
                width: 150,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                {/* Spider-Man: No Way Home */}
                {data.length !== 0 ? data[0].original_title : ''}
              </Text>
            </View>

            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 20,
                marginTop: 180,
                width: 150,
              }}>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 25,
                  borderColor: 'yellow',
                  borderWidth: 1,
                }}>
                <Text style={{color: 'yellow', fontWeight: '500'}}>
                  Watch Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            backgroundColor: Colors.black,
          }}>
          <HeaderSection title={'New Release'} />
          <View style={{height: 200}}>
            <FlatList
              horizontal
              data={data}
              renderItem={({item}) => (
                <ListItem
                  item={item}
                  handleOnpress={() =>
                    navigation.navigate('Detail', {movie: item})
                  }
                />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <HeaderSection title={'TV Show'} />
          <View style={{height: 200}}>
            <FlatList
              horizontal
              data={data}
              renderItem={({item}) => (
                <ListItem item={item} handleOnpress={() => {}} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{paddingBottom: 50}}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default HomeScreen;
