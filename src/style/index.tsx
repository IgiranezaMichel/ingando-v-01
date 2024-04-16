import {StyleSheet} from 'react-native';
import {screen} from '../object/screen';

export const sl = StyleSheet.create({
  bgPrimary: {
    backgroundColor: '#007bff',
  },
  bgSuccess: {
    backgroundColor: '#28a745',
  },
  bgDanger: {
    backgroundColor: '#dc3545',
  },
  bgMuted: {
    backgroundColor: '#6c757d',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  // border
  border: {borderWidth: 1},
  border0: {borderWidth: 0},
  border1: {borderWidth: 2},
  border2: {borderWidth: 3},
  border3: {borderWidth: 4},
  border4: {borderWidth: 5},
  border5: {borderWidth: 6},
  borderTop: {borderTopWidth: 1},
  borderBottom: {borderBottomWidth: 1},
  borderPrimary: {borderColor: '#007bff'},
  borderTransparent: {borderColor: 'transparent'},
  borderDark: {borderColor: 'black'},
  borderSuCess: {borderColor: '#28a745'},
  borderDanger: {borderColor: '#db3545'},
  borderMuted: {borderColor: '#6c757d'},
  borderWhite: {borderColor: 'white'},
  // fs

  // card
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: screen.width / 20,
  },
  //   font
  display1: {
    fontSize: 48 * screen.width * 0.003,
  },
  display2: {
    fontSize: 36 * screen.width * 0.003,
  },
  display3: {
    fontSize: 24 * screen.width * 0.003,
  },
  display4: {
    fontSize: 12 * screen.width * 0.003,
  },
  display5: {
    fontSize: 7 * screen.width * 0.003,
  },
  //   Grid
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  spaceBtn: {
    justifyContent: 'space-between',
  },
  colSm1: {width: ' 8.33333%'},
  colSm2: {width: '16.66667%'},
  colSm3: {width: '25%'},
  colSm4: {width: '33.33333%'},
  colSm5: {width: '41.66667%'},
  colSm6: {width: '50%'},
  colSm7: {width: '58.33333%'},
  colSm8: {width: '66.66667%'},
  colSm9: {width: '75%'},
  colSm10: {width: '83.33333%'},
  colSm11: {width: '91.66667%'},
  colSm11_5: {width: '96%'},
  colSm12: {width: '100%'},
  mAuto: {alignSelf: 'center'},
  mLeft: {alignSelf: 'flex-start'},
  mRight: {alignSelf: 'flex-end'},
  m0: {marginVertical: 0},
  mt1: {marginTop: '1%'},
  mt2: {marginTop: '2%'},
  mt3: {marginTop: '3%'},
  mt4: {marginTop: '4%'},
  mt5: {marginTop: '5%'},
  mt6: {marginTop: '8%'},
  mt7: {marginTop: '10%'},
  mt8: {marginTop: '12%'},
  mb1: {marginBottom: '1%'},
  mb2: {marginBottom: '2%'},
  mb3: {marginBottom: '3%'},
  mb4: {marginBottom: '4%'},
  mb5: {marginBottom: '5%'},
  mx1: {marginLeft: '1%'},
  mx2: {marginLeft: '2%'},
  mx3: {marginLeft: '3%'},
  mx4: {marginLeft: '4%'},
  mx5: {marginLeft: '5%'},
  g1: {margin: '1%'},
  g2: {margin: '2%'},
  //   padding
  p0: {padding: 0},
  p1: {padding: '1%'},
  p2: {padding: '2%'},
  p3: {padding: '3%'},
  p4: {padding: '4%'},
  p5: {padding: '5%'},
  p6: {padding: '6%'},
  //   rounded
  rounded0: {borderRadius: 0},
  roundedCircle: {borderRadius: 100},
  //   text
  fwBolder: {fontWeight: 'bold'},
  textCenter: {textAlign: 'center'},
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},
  textJustify: {textAlign: 'justify'},
  textPrimary: {color: '#007bff'},
  textWhite: {color: 'white'},
  textDark: {color: 'black'},
  textSuccess: {color: '#28a745'},
  textDanger: {color: '#dc3545'},
  textMuted: {color: '#6c757d'},
  textShadow: {
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});
