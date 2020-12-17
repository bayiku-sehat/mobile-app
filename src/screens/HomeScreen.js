import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {List, Divider, Title, IconButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Loading from '../components/Loading';
import useStatsBar from '../helpers/useStatsBar';
import {useSelector} from 'react-redux';
import ButtonBase from '../components/ButtonBase';
import {fetchCurrentUserDetails} from '../store/action/userActions';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  useStatsBar('light-content');
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [namaRoom, setNamaRoom] = useState([]);
  const userLogedin = useSelector((state) => state.userReducer.usera);
  const namaBayi = useSelector((state) => state.userReducer.user.details.Bayis);
  const [roomChat, setRoomChat] = useState([]);

  useEffect(() => {
    //dispatch(fetchBabies());
    const unsubscribe = firestore()
      .collection('THREADS')
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs?.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',

            latestMessage: {
              text: '',
            },
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });

    /**
     * unsubscribe listener
     */
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let temp = [];
    console.log(threads, 'thread');
    for (let i = 0; i < namaRoom.length; i++) {
      console.log('masuk');
      const filter = threads.filter((el) => {
        console.log('masuk filter', el.name);
        console.log(el.name, '======', namaRoom[i], 'nama');
        return el.name === namaRoom[i];
      });
      console.log(filter, 'data filter');
      temp.push(filter);
    }
    setRoomChat(temp);
  }, [threads]);

  const generateRoom = () => {
    dispatch(fetchCurrentUserDetails());

    namaBayi?.map((roomBayi) => {
      console.log(roomBayi, 'dalam');
      firestore()
        .collection('THREADS')
        .add({
          name: roomBayi.nama,
          latestMessage: {
            text: `You have joined the room ${roomBayi.nama}.`,
            createdAt: new Date().getTime(),
          },
        })
        .then((docRef) => {
          docRef.collection('MESSAGES').add({
            text: `You have joined the room ${roomBayi.nama}.`,
            createdAt: new Date().getTime(),
            system: true,
          });
        });
    });

    // let tampungan = [];
    // namaBayi?.map((bayi) => {
    //   tampungan.push(bayi.nama);
    // });
    // setNamaRoom(tampungan);
  };

  useEffect(() => {
    let tampungan = [];
    namaBayi?.map((bayi) => {
      tampungan.push(bayi.nama);
    });
    setNamaRoom(tampungan);
  }, [threads]);

  if (loading) {
    return <Loading />;
  }
  console.log(namaBayi, 'namaBayi');
  console.log(namaRoom, 'nama room');
  let tampunganRoom = [];
  roomChat.map((room) => {
    room.map((namaAnak) => {
      tampunganRoom.push(namaAnak);
    });
  });

  console.log(namaBayi);
  return (
    <>
      <View style={styles.container}>
        <Title style={{textAlign: 'center'}}>Konsultasi Dengan Dokter</Title>
        {namaBayi.length == 0 && (
          <ButtonBase
            onPress={() => generateRoom()}
            title="Mulai Konsultasi"
            borderRadius={25}
            width={250}
            marginTop={48}
            marginLeft={70}
          />
        )}
        <FlatList
          data={tampunganRoom}
          keyExtractor={(item) => item?._id}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('RoomScreen', {thread: item})}>
              <List.Item
                title={item?.name}
                description={item?.latestMessage.text}
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={1}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});
