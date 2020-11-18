import * as CONSTANTS from '../constants';

function action(type, args = {}) {
  return {type, ...Object.assign({},args)}
}

export const test=(data)=>action(CONSTANTS.HELLOWORLD,{data})
