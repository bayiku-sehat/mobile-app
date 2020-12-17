import React from 'react';

import {useSelector} from 'react-redux';

import {View, Text, StyleSheet} from 'react-native';

import statusToEmoji from '../helpers/statusToEmoji';

import getAge from '../helpers/getAge';

const tinggi = [47, 51, 52.5, 56, 57.5, 60, 62];
const tinggiStatus = [0, 0, -1, 0, -1, 0, 0];

const berat = [3, 3.6, 4, 4.5, 5.5, 6.7, 7.8];
const beratStatus = [0, 0, 0, -1, 0, 0, 0];

const kepala = [32, 34.1, 35.8, 37.5, 40, 41.6, 43];
const kepalaStatus = [0, -1, -1, 0, 0, 0, 0];
const umur = [0, 1, 2, 3, 4, 5, 6];

export default function TableRow({row, bayi, baby, i}) {
  // console.log({row, bayi, i});

  let u = [];

  let t = [];
  let b = [];
  let k = [];
  let s_t = [];
  let s_b = [];
  let s_k = [];

  baby.Perkembangans.map((el) => {
    u.unshift(getAge(el.updatedAt));
    t.unshift(el.tinggi);
    b.unshift(el.berat_badan);
    k.unshift(el.lingkar_kepala);
  });

  baby.Perkembangans.map((el) => {
    u.unshift(getAge(el.updatedAt));
  });

  return (
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
          {statusToEmoji({value: tinggiStatus[i]})}
          <Text style={styles.text}>{tinggi[i]}</Text>
        </View>
      </View>
      <View style={styles.tableCell}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {statusToEmoji({value: beratStatus[i]})}
          <Text style={styles.text}>{berat[i]}</Text>
        </View>
      </View>
      <View style={styles.tableCell}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {statusToEmoji({value: kepalaStatus[i]})}
          <Text style={styles.text}>{kepala[i]}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tableCell: {
    borderBottomWidth: 1,
    borderBottomColor: '#c8e1ff',
    flex: 1,
    paddingVertical: 8,
  },
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});
