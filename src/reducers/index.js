/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-28 15:09:25
 * @LastEditTime: 2019-10-28 17:01:41
 * @LastEditors: Please set LastEditors
 */
import { combineReducers } from 'redux';
import HelloWorld from "./HelloWorld";
import DB from "./Data"

const reducers = combineReducers ({
    HelloWorld,
    DB
});

export default reducers;
