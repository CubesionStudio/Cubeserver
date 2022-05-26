/*
┌─────────────────────────────────────────────────────
│Source.File
│─────────────────────────────────────────────────────
│操作服务器目录内的文件
└─────────────────────────────────────────────────────
*/

const fs = require('fs/promises');
const FileError = require('../Model/Error/FileError');

/**
 * @class
 */
class File {
  /**
   * Read file or dir
   * @param {string} path
   * @param {{flag?:string,deep:number}} option
   * @returns {string|string[]|FileError}
   */
  async read(path, option = { flag: 'r' ,deep:1000}) {
   try{
     const file = await fs.open(path,option.flag);
     const stream = await file.createReadStream();
     let index = 0;
     let data = '';
     while(true){
       let cache = stream.read(option.deep);
       if(cache == null){
         return data;
       }else{
         
       }
     }
   }catch(e){
     
   }
  }

  /**
   * Write a file.
   * @param {string} path
   * @param {string} content
   * @returns {void|FileError}
   */
  async write(path, content) {
    try {
      const stat = await fs.stat(path);
    } catch (e) {
      return new FileError('system', 0, e.message);
    }
    if (stat.isFile()) {
      const file = await fs.open(path, 'w+');
      const stream = await file.createWriteStream();
      stream.write(content);
      let status = [true];
      await stream.on('error', function(e) {
        status[0] = false;
        status[1] = new FileError('system', 0, e.message);
      });

    } else if (stat.isDirectory()) {
      return new FileError('type', 2);
    } else {
      return new FileError('unkown', -1);
    }
  }
}

module.exports = File;
