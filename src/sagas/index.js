/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2019-05-25 14:42:22
 * @LastEditors: LJL
 * @LastEditTime: 2020-09-11 15:22:05
 */
import {all,fork} from 'redux-saga/effects';
import * as HelloWorld from './HelloWorld';

export default function* rootSaga(getState) {
  yield all([
    fork(HelloWorld.watch),
  ]); 
//   yield call(STATUS.init);
//   yield all([
//     fork(STATUS.timer),
//   ])
}
