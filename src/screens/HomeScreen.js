import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {List, Divider, Title, IconButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Loading from '../components/Loading';
import useStatsBar from '../helpers/useStatsBar';
import {AuthContext} from '../navigation/AuthProvider';

export default function HomeScreen({navigation}) {
  useStatsBar('light-content');

  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('USERS')
      .onSnapshot((querySnapshot) => {
        const users = querySnapshot.docs.map((documentSnapshot) => {
          return {
            ...documentSnapshot.data(),
          };
        });

        setUsers(users);
        console.log(users);

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
    const filterByRole = users.filter((users) => users.id !== user.uid);
    setFilter(filterByRole);
  }, [users]);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Title style={{textAlign: 'center'}}>Daftar Dokter Tersedia</Title>
      <FlatList
        data={filter}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={
          ({item}) => (
            <TouchableOpacity>
              <List.Item title={item.username} />
            </TouchableOpacity>
          )
          // <TouchableOpacity
          //   onPress={() => navigation.navigate('RoomScreen', {thread: item})}>
          //   <List.Item
          //     title={item.name}
          //     titleNumberOfLines={1}
          //     titleStyle={styles.listTitle}
          //     descriptionStyle={styles.listDescription}
          //     descriptionNumberOfLines={1}
          //   />
          // </TouchableOpacity>
        }
      />
    </View>
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
