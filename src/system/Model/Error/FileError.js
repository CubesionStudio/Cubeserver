const ErrorBase = require('./Base');

class FileError extends ErrorBase{
  /**
   * @param {string} msg
   * @param {number} code
   * @param {string} more
  */
  constructor(msg,code,more=''){
    super();
    this.msg = msg;
    this.code = code;
    this.more = more;
  }
  
  /**
   * Get the message
   * @returns {string}
  */
  getMessage(){
    return this.msg;
  }
  /**
   * Get the code
   * @returns {number}
  */
  getCode(){
    return this.code;
  }
  /**
   * Get the More
   * @returns {string}
  */
  getMore(){
    return this.more;
  }
}


module.exports = FileError;
/*
0:系统错误
 - msg:System Error
1:参数错误
 - msg:Argument Error
2:类型不匹配
 - msg:Unexcepted Type
*/
