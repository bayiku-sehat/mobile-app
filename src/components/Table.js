import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import TableRow from './TableRow';

const umur = [0, 1, 2, 3, 4, 5, 6];

const tableHead = [
  'Umur\n(bulan)',
  'Panjang\n(cm)',
  'Berat\n(kg)',
  'Lingkar Kepala\n(cm)',
];

export default function Table({baby}) {
  return (
    <View style={styles.tableContainer}>
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
          <TableRow key={i} row={row} baby={baby} i={i} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
