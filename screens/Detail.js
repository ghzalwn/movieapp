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
import {SafeAreaView, withSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from '../components/ListItem';
import HeaderSection from './HeaderSection';

const DetailScreen = ({route, navigation}) => {
  const {movie} = route.params;

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const getMoviesSimiliar = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=f292d58f8d80bff645c5281987b2e2d2`,
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
    getMoviesSimiliar();
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
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <ScrollView
        style={{backgroundColor: 'black'}}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1}}>
        {/* <Header /> */}

        <ImageBackground
          style={{height: 250, width: '100%', backgroundColor: 'black'}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
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
                marginTop: 20,
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
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginLeft: 15,
                marginTop: 20,
                width: 150,
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={14} color="yellow" />
              </TouchableOpacity>
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
                marginLeft: 15,
                marginTop: 70,
                width: 150,
              }}>
              <View
                style={{
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  marginTop: 15,
                  marginBottom: 10,
                }}>
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
                marginLeft: 100,
                marginTop: 75,
                width: 150,
              }}>
              <Text style={{color: 'white', fontSize: 12}}>
                {movie.release_date.substring(0, 4)}
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
                marginTop: 150,
                width: 150,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                {movie.original_title}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            backgroundColor: Colors.black,
          }}>
          <View
            style={{
              marginLeft: 10,
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Sinopsis
            </Text>
          </View>
          <View style={{height: 200}}>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: '#242424',
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
              }}>
              <Text style={{color: 'white', fontSize: 14, padding: 10}}>
                {movie.overview}
              </Text>
            </View>
          </View>
          <HeaderSection title={'You Migth Also Like This'} />
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

export default DetailScreen;
