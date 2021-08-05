'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {// 验证token
    enable: true,
    package: 'egg-jwt',
  },
  cors: {// 跨域
    enable: true,
    package: 'egg-cors',
  },
};
