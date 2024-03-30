/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import {FC, ReactNode} from 'react';
import {sl} from '../style';
type timeLine = {
  headerTxt: string;
  headerStyle: any;
  children: ReactNode;
};
export const TimeLine: FC<timeLine> = props => {
  return (
    <View style={[{width: 'auto'}]}>
      <View style={[sl.row]}>
        <View style={[sl.bgMuted, sl.roundedCircle, {width: 20, height: 20}]} />
        <Text style={[{marginLeft: 4}, props.headerStyle]}>
          {props.headerTxt}
        </Text>
      </View>
      <View style={[sl.row, {width: 'auto'}, sl.colSm11]}>
        <View style={[sl.card, sl.p0, sl.border1, {marginLeft: 8}]} />
        <View style={[sl.card, sl.p0, {marginLeft: 10, elevation: 0}]}>
          {props.children}
        </View>
      </View>
    </View>
  );
};
