/*
┌─────────────────────────────────────────────────────
│Source.File
│─────────────────────────────────────────────────────
│操作服务器目录内的文件
└─────────────────────────────────────────────────────
*/

const fs = require('fs/promises');
const Path = require('./Path.js')

/**
* @class
*/
class File{
  /**
   * Read file or dir
   * @param {number} test description
   * @returns {File}
  */
  read(test){
    
  }
  
  /**
   * @param {string} path
   * @return {fs.Direct}
  */
  #open(path){
    
  }
}

module.exports = File;
