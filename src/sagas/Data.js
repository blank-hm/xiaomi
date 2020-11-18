/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2019-07-07 14:08:45
 * @LastEditors: HY
 * @LastEditTime: 2019-07-13 15:26:04
 */

import { put, call, select, fork, takeLatest } from 'redux-saga/effects'

import * as CONSTANTS from '../constants';
import * as ACTIONS from '../actions';
import * as SERVICE from '../service'

const API = SERVICE.API;


export function* watch() {
    yield takeLatest(CONSTANTS.INITDB, initDB);
}


function* initDB(action) {
    try {
        let id={};
        // const { data } = action;
        let body = {
            // id:5
        }

        const result = yield call(API.getData, `Articles/List`, body);
        console.log(result)
        const  {success}  = result;
        if (success) {
            console.log("成功" )
        }
        else {
            // yield fork(SERVICE.showToast,`错误:${result.message}`,CONSTANTS.ERR)
            console.log("失败")
        }


    } catch (e) {
        console.log("saga error"+e)
        // yield fork(SERVICE.showToast,`错误:${e}`,CONSTANTS.ERR)
        // yield fork(SERVICE.showToast,`获取SEED错误:${e}`,TYPES.DEBUG)
    } finally {

    }
}
