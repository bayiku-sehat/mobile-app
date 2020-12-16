import React, {useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Link} from '@react-navigation/native';
import ButtonBase from '../components/ButtonBase';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

import statusToEmoji from '../helpers/statusToEmoji';
import convertDate from '../helpers/convertDate';
import getAge from '../helpers/getAge';

import {
  Grid,
  LineChart,
  XAxis,
  YAxis,
  AreaChart,
} from 'react-native-svg-charts';
import {Path} from 'react-native-svg';
import * as shape from 'd3-shape';

import {t} from 'react-native-tailwindcss';

import {Table, Row, Rows} from 'react-native-table-component';

import CaseListItem from '../components/CaseListItem';

import HomeNavItem from '../components/HomeNavItem';
import TextBase from '../components/TextBase';
import PhotoPreview from '../components/PhotoPreview';
import PjCard from '../components/PjCard';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const tinggi = [47, 51, 52.5, 56, 57.5, 60, 62];
const tinggiStatus = [0, 0, -1, 0, -1, 0, 0];
const berat = [3, 3.6, 4, 4.5, 5.5, 6.7, 7.8];
const beratObj = [
  {v: 3, s: 0},
  {v: 3.6, s: 0},
  {v: 4, s: 0},
  {v: 4.5, s: -1},
  {v: 5.5, s: 0},
  {v: 6.7, s: 0},
  {v: 7.8, s: 0},
];
const beratStatus = [0, 0, 0, -1, 0, 0, 0];
const kepala = [32, 34.1, 35.8, 37.5, 40, 41.6, 43];
const kepalaStatus = [0, -1, -1, 0, 0, 0, 0];
const umur = [0, 1, 2, 3, 4, 5, 6];
const tableHead = [
  'Umur\n(bulan)',
  'Panjang\n(cm)',
  'Berat\n(kg)',
  'Lingkar Kepala\n(cm)',
];

let tableData = umur.map((el, i) => [
  umur[i],
  statusToEmoji(tinggiStatus[i]),
  berat[i],
  kepala[i],
]);

const axesSvg = {fontSize: 10, fill: '#686868'};
const verticalContentInset = {top: 10, bottom: 10};
const xAxisHeight = 30;

const Line = ({line, stroke = 'rgb(134, 65, 244)'}) => (
  <Path key={'line'} d={line} stroke={stroke} strokeWidth={3} fill={'none'} />
);

export default function BabyDetails({route, navigation}) {
  const {role} = useSelector((state) => state.userReducer.user.details);

  const {baby} = route.params;
  console.log({baby});

  const [input, setInput] = useState({
    kepala: baby.lingkar_kepala,
    tinggi: baby.tinggi,
    berat: baby.berat_badan,
  });

  function handleInput(payload) {
    console.log(payload);
    const {name, value} = payload;
    console.log({...input, [name]: value});
    setInput({...input, [name]: value});
  }

  function handleUpdateData() {
    alert(input);
  }
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={{alignItems: 'flex-end', zIndex: 10}}>
          <ButtonBase
            size="sm"
            onPress={() => navigation.replace('Login')}
            title="Sign Out"
            backgroundColor="black"
            marginTop={10}
            marginRight={10}
          />
        </View>
        <View style={styles.body}>
          <View style={{flex: 1}}>
            <View style={[styles.container, styles.inner]}>
              <View style={styles.circle1}></View>
              {/* PROFILE */}
              <View
                style={[
                  styles.profileContainer,
                  styles.shadowLarge,
                  styles.filter,
                ]}>
                <View style={styles.badgesContainer}>
                  <View style={[styles.badge, styles.success]}>
                    <Text style={[styles.badgeText]}>Normal</Text>
                  </View>
                  <View style={[styles.badge, styles.danger]}>
                    <Text style={[styles.badgeText]}>Unverified</Text>
                  </View>
                </View>
                <View style={styles.photoRing}>
                  <View style={styles.photoContainer}>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri: baby.foto,
                      }}
                    />
                  </View>
                </View>

                <View style={styles.data}>
                  <TextBase bold size={16}>
                    {baby.nama}
                  </TextBase>
                  <TextBase light>{getAge(baby.tanggal_lahir)} bulan</TextBase>
                </View>
                <View style={[t.wFull, t.pL4]}>
                  <TextBase bold>Galeri Foto</TextBase>
                </View>
                <View style={[styles.imagePreviewList]}>
                  {[1, 2, 3].map((_, i) => (
                    <PhotoPreview key={i} uri={baby.foto} />
                  ))}
                  <PhotoPreview overlay remaining={6} uri={baby.foto} />
                </View>
              </View>

              {/* PENANGGUNG JAWAB */}

              <View style={[styles.frame, styles.shadowLarge]}>
                <TextBase
                  bold
                  size={20}
                  // color="#1E88E5"
                  marginTop={6}
                  style={styles.sectionTitle}>
                  Penanggung Jawab
                </TextBase>
                <View style={[t.flexCol, t.itemsEnd]}>
                  <View style={[t.flexRow, t.justifyBetween, t.flexWrap]}>
                    {baby.Users?.map((pj, i) => (
                      <PjCard key={i} pj={pj} />
                    ))}
                  </View>

                  {/* CHAT BUTTON */}
                  <TouchableOpacity
                    style={[
                      t.itemsEnd,
                      t.justifyCenter,
                      t.mR2,
                      t.mT2,
                      t.pY2,
                      t.pX10,
                      t.flexRow,
                      t.border,
                      t.borderGray500,
                      t.roundedFull,
                      t.minW0,
                    ]}>
                    <Icon
                      name="ios-chatbubble-outline"
                      color="#686868"
                      size={18}
                    />
                    <TextBase style={[t.mL2]}>Diskusi</TextBase>
                  </TouchableOpacity>
                </View>
              </View>

              {/* DATA FISIK BAYI */}
              <View
                style={[
                  styles.frame,
                  styles.shadowLarge,
                  {flexDirection: 'column'},
                ]}>
                <TextBase
                  bold
                  size={20}
                  // color="#1E88E5"
                  marginTop={6}
                  style={styles.sectionTitle}>
                  Data Fisik Bayi
                </TextBase>
                <View style={[t.mB4]}>
                  <TextBase style={[t.fontBold, t.mB2]}>
                    Update terakhir{' '}
                  </TextBase>
                  <View style={[t.flexRow]}>
                    <View style={[t.w18]}>
                      <TextBase>Tanggal: </TextBase>
                    </View>
                    <View style={[t.flexRow]}>
                      <TextBase bold>{convertDate(baby.updatedAt)}</TextBase>
                    </View>
                  </View>

                  <View style={[t.flexRow]}>
                    <View style={[t.w18]}>
                      <TextBase>Oleh: </TextBase>
                    </View>
                    <View style={[t.flexRow]}>
                      <TextBase bold>{baby.User.nama} </TextBase>
                      <TextBase bold>({baby.User.role})</TextBase>
                    </View>
                  </View>
                </View>
                <View style={styles.dataContainer}>
                  <View style={styles.dataItemContainer}>
                    <View style={styles.dataTitle}>
                      <Text style={styles.dataText}>Kepala</Text>
                    </View>
                    <View style={styles.dataInputContainer}>
                      <TextInput
                        defaultValue={input.kepala}
                        onChangeText={(value) =>
                          handleInput({value, name: 'kepala'})
                        }
                        numeric
                        keyboardType={'numeric'}
                        style={styles.dataInput}
                      />
                      <Text style={styles.dataInputUnit}> cm</Text>
                    </View>
                    <FA5Icon
                      name="smile"
                      style={[styles.statusIcon, {color: 'green'}]}
                    />
                  </View>
                  <View style={styles.dataItemContainer}>
                    <View style={styles.dataTitle}>
                      <Text style={styles.dataText}>Tinggi</Text>
                    </View>
                    <View style={styles.dataInputContainer}>
                      <TextInput
                        defaultValue={input.tinggi}
                        onChangeText={(value) =>
                          handleInput({value, name: 'tinggi'})
                        }
                        numeric
                        keyboardType={'numeric'}
                        style={styles.dataInput}
                      />
                      <Text style={styles.dataInputUnit}> cm</Text>
                    </View>
                    <FA5Icon
                      name="frown"
                      style={[styles.statusIcon, {color: 'orange'}]}
                    />
                  </View>
                  <View style={styles.dataItemContainer}>
                    <View style={styles.dataTitle}>
                      <Text style={styles.dataText}>Berat</Text>
                    </View>
                    <View style={styles.dataInputContainer}>
                      <TextInput
                        defaultValue={input.berat}
                        onChangeText={(value) =>
                          handleInput({value, name: 'berat'})
                        }
                        numeric
                        keyboardType={'numeric'}
                        style={styles.dataInput}
                      />
                      <Text style={styles.dataInputUnit}> kg</Text>
                    </View>
                    <FA5Icon
                      name="smile"
                      style={[styles.statusIcon, {color: 'green'}]}
                    />
                  </View>
                </View>
                <ButtonBase
                  title="Update Data"
                  borderRadius={100}
                  marginBottom={12}
                  onPress={handleUpdateData}
                />
              </View>

              {/* RIWAYAT PERKEMBANGAN BAYI */}

              <View style={[styles.frame, styles.shadowLarge]}>
                <TextBase
                  bold
                  size={20}
                  // color="#1E88E5"
                  marginTop={6}
                  style={styles.sectionTitle}>
                  Riwayat Perkembangan Bayi
                </TextBase>
                {/* TABLE */}

                <View style={styles.tableContainer}>
                  {/* <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row
                      data={tableHead}
                      style={styles.head}
                      textStyle={styles.text}
                    />
                    <Rows data={tableData} textStyle={styles.text} />
                  </Table> */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      borderBottomWidth: 2,
                      borderBottomColor: '#c8e1ff',
                    }}>
                    {tableHead.map((head, i) => (
                      <View key={`${head}-${i}`} style={styles.tableCell}>
                        <Text style={styles.text}>{head}</Text>
                      </View>
                    ))}
                  </View>
                  <View>
                    {umur.map((row, i) => (
                      <View key={`${row}-${i}`} style={{flexDirection: 'row'}}>
                        <View style={styles.tableCell}>
                          <Text style={styles.text}>{umur[i]}</Text>
                        </View>
                        <View style={styles.tableCell}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            {statusToEmoji(tinggiStatus[i])}
                            <Text style={styles.text}>{tinggi[i]}</Text>
                          </View>
                        </View>
                        <View style={styles.tableCell}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            {statusToEmoji(beratStatus[i])}
                            <Text style={styles.text}>{berat[i]}</Text>
                          </View>
                        </View>
                        <View style={styles.tableCell}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            {statusToEmoji(kepalaStatus[i])}
                            <Text style={styles.text}>{kepala[i]}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
                {/* CHART */}
                <View style={styles.chartContainer}>
                  <View>
                    <TextBase bold>Panjang (cm)</TextBase>
                  </View>

                  <View
                    style={{
                      height: 300,
                      padding: 20,
                      paddingTop: 6,
                      flexDirection: 'row',
                    }}>
                    <YAxis
                      data={tinggi}
                      style={{marginBottom: xAxisHeight}}
                      contentInset={verticalContentInset}
                      svg={axesSvg}
                      yAccessor={({item}) => item}
                    />
                    <View style={{flex: 1, marginLeft: 10}}>
                      {/* <LineChart
                        style={{flex: 1}}
                        data={tinggi}
                        contentInset={verticalContentInset}
                        svg={{
                          stroke: 'rgb(134, 65, 244)',
                          strokeWidth: 3,
                        }}>
                        <Grid />
                      </LineChart> */}

                      <AreaChart
                        style={{flex: 1}}
                        data={tinggi}
                        contentInset={{top: 30, bottom: 30}}
                        curve={shape.curveLinear}
                        svg={{fill: 'rgba(65, 210, 77, 0.2)'}}>
                        <Grid />
                        <Line stroke={'rgb(65, 210, 77)'} />
                      </AreaChart>
                      <XAxis
                        style={{marginHorizontal: -10, height: xAxisHeight}}
                        data={umur}
                        xAccessor={({item}) => item}
                        formatLabel={(value, index) => `${value} bln`}
                        contentInset={{left: 10, right: 10}}
                        svg={axesSvg}
                      />
                    </View>
                  </View>

                  <View>
                    <TextBase bold>Berat (kg)</TextBase>
                  </View>

                  <View
                    style={{
                      height: 300,
                      padding: 20,
                      paddingTop: 6,
                      flexDirection: 'row',
                    }}>
                    <YAxis
                      data={berat}
                      style={{marginBottom: xAxisHeight}}
                      contentInset={verticalContentInset}
                      svg={axesSvg}
                    />

                    <View style={{flex: 1, marginLeft: 10}}>
                      {/* <LineChart
                        style={{flex: 1}}
                        data={berat}
                        contentInset={verticalContentInset}
                        svg={{stroke: 'rgb(134, 65, 244)'}}>
                        <Grid />
                      </LineChart> */}

                      <AreaChart
                        style={{flex: 1}}
                        data={berat}
                        contentInset={{top: 30, bottom: 30}}
                        curve={shape.curveLinear}
                        svg={{fill: 'rgba(134, 65, 244, 0.2)'}}>
                        <Grid />
                        <Line />
                      </AreaChart>
                      <XAxis
                        style={{marginHorizontal: -10, height: xAxisHeight}}
                        xAccessor={({item}) => item}
                        data={umur}
                        formatLabel={(value, index) => `${value} bln`}
                        contentInset={{left: 10, right: 10}}
                        svg={axesSvg}
                      />
                      {/* <XAxis
                        style={{
                          // width: '100%',
                          marginHorizontal: -10,
                          height: 20,
                        }}
                        data={umur}
                        xAccessor={({item}) => item}
                        formatLabel={(value) => value}
                        contentInset={{left: 10, right: 10}}
                        svg={axesSvg}
                      /> */}
                    </View>
                  </View>

                  <View>
                    <TextBase bold>Kepala (cm)</TextBase>
                  </View>

                  <View
                    style={{
                      height: 300,
                      padding: 20,
                      paddingTop: 6,
                      flexDirection: 'row',
                    }}>
                    <YAxis
                      data={kepala}
                      style={{marginBottom: xAxisHeight}}
                      contentInset={verticalContentInset}
                      svg={axesSvg}
                    />
                    <View style={{flex: 1, marginLeft: 10}}>
                      {/* <LineChart
                        style={{flex: 1}}
                        data={kepala}
                        contentInset={verticalContentInset}
                        svg={{stroke: 'rgb(134, 65, 244)'}}>
                        <Grid />
                      </LineChart> */}
                      <AreaChart
                        style={{flex: 1}}
                        data={kepala}
                        contentInset={{top: 30, bottom: 30}}
                        curve={shape.curveLinear}
                        svg={{fill: 'rgba(58, 192, 210, 0.2)'}}>
                        <Grid />
                        <Line stroke={'rgb(58, 192, 210)'} />
                      </AreaChart>
                      <XAxis
                        style={{marginHorizontal: -10, height: xAxisHeight}}
                        xAccessor={({item}) => item}
                        data={umur}
                        formatLabel={(value, index) => `${value} bln`}
                        contentInset={{left: 10, right: 10}}
                        svg={axesSvg}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.circle2} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 24,
    minHeight: ScreenHeight,
  },

  signout: {
    marginTop: 10,
    marginRight: 10,
  },

  body: {
    // backgroundColor: Colors.white,
    zIndex: 5,
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: 'space-around',
    // justifyContent: 'center',
  },

  profileContainer: {
    marginTop: 50,
    backgroundColor: 'white',
    width: ScreenWidth * 0.9,
    borderRadius: 16,
    alignItems: 'center',
  },

  badgesContainer: {
    width: '100%',
    alignItems: 'flex-end',
    zIndex: 10,
    top: 10,
    position: 'absolute',
  },

  badge: {
    width: 90,
    marginVertical: 6,
    paddingVertical: 4,
    paddingLeft: 12,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },

  success: {
    backgroundColor: '#5DB075',
  },

  danger: {
    backgroundColor: '#FE5555',
  },

  badgeText: {
    color: 'white',
    fontSize: 12,
  },

  photoRing: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 98,
    width: 98,
    borderRadius: 100,
    backgroundColor: 'white',
    position: 'absolute',
    top: -45,
  },
  photoContainer: {
    height: 90,
    width: 90,
    borderRadius: 100,
    overflow: 'hidden',
  },

  photoPJContainer: {
    height: 44,
    width: 44,
    borderRadius: 100,
    overflow: 'hidden',
  },
  shadowLarge: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },

  avatar: {
    height: 90,
    width: 90,
  },
  avatarPJ: {
    height: 44,
    width: 44,
  },

  data: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },

  frame: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: 'white',
    width: ScreenWidth * 0.9,
    borderRadius: 16,
  },

  imagePreviewList: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around',
    width: '100%',
  },

  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dataItemContainer: {
    flex: 1,
    paddingHorizontal: 6,
  },
  dataTitle: {
    paddingVertical: 3,
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#a75aff',
    marginBottom: 6,
  },

  dataText: {
    textAlign: 'center',
    color: 'white',
  },

  dataInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataInput: {
    height: 40,
    width: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 0,
    paddingLeft: 6,
    paddingRight: 6,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontSize: 26,
    textAlign: 'right',
  },

  dataInputUnit: {},

  statusIcon: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 24,
    textAlign: 'center',
  },

  sectionTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },

  scrollView: {
    backgroundColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },

  chartContainer: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
    width: '100%',
  },
  chart: {
    flex: 1,
  },

  pj: {flex: 1},

  pjItem: {flexDirection: 'row', paddingVertical: 10},
  chat: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },

  tableContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  tableCell: {
    borderBottomWidth: 1,
    borderBottomColor: '#c8e1ff',
    flex: 1,
    paddingVertical: 8,
  },
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},

  circle1: {
    backgroundColor: '#1E88E5',
    height: ScreenWidth * 1.25,
    width: ScreenWidth * 1.25,
    borderRadius: 1000,
    position: 'absolute',
    top: ScreenWidth * -0.85,
    left: -100,
    right: -100,
    bottom: -250,
  },
  circle2: {
    backgroundColor: '#1E88E5',
    height: 300,
    width: 200,
    borderRadius: 1000,
    position: 'absolute',
    top: 500,
    left: ScreenWidth - 150,
    zIndex: 1,
  },
});
