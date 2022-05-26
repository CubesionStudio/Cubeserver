/*
┌─────────────────────────────────────────────────────
│Source.Path
│─────────────────────────────────────────────────────
│组装与解析路径
└─────────────────────────────────────────────────────
*/

/**
 * @class
*/
class Path{
  /**
   * 组装路径
   * @param {string[]} args
   * @param {{path:boolean,system?:string}} data
   * @returns {string}
  */
  static join(data,...args){
    /*
    data.path: true代表绝对路径 false代表相对路径
    */
    switch(this.getSystemList(data.system)){
      case 0:{
        var tem = [];
        if(data.path){
          //绝对路径输出
          for(let [index,value] of args.entries()){
            if(value == '..'){
              if(index != 0){
                tem.pop();
              }else{
                tem = ['/'];
              }
            }else if(value == '.'){
              continue;
            }else{
              tem.push(value);
            }
          }
          return '/' + tem.join('/');
        }else{
          //相对路径输出
          for(let [index,value] of args.entries()){
            if(value == '..'){
              if(index != 0){
                tem.pop();
              }else{
                tem = ['.'];
              }
            }else if(value == '.'){
              continue;
            }else{
              tem.push(value);
            }
          }
          return './' + tem.join('/');
        }
      }
      case 1:{
        var tem = [];
        if(data.path){
          //绝对路径输出
          for(let [index,value] of args.entries()){
            if(value == '..'){
              if(index != 0){
                tem.pop();
              }else{
                tem = ['C:\\'];
              }
            }else if(value == '.'){
              continue;
            }else{
              tem.push(value);
            }
          }
          return '\\' + tem.join('\\');
        }else{
          //相对路径输出
          for(let [index,value] of args.entries()){
            if(value == '..'){
              if(index != 0){
                tem.pop();
              }else{
                tem = ['.'];
              }
            }else if(value == '.'){
              continue;
            }else{
              tem.push(value);
            }
          }
          return '.\\' + tem.join('\\');
        }
      }
      case 2:{
        var tem = [];
        if(data.path){
          //绝对路径输出
          for(let [index,value] of args.entries()){
            if(value == '..'){
              if(index != 0){
                tem.pop();
              }else{
                tem = ['/'];
              }
            }else if(value == '.'){
              continue;
            }else{
              tem.push(value);
            }
          }
          return '/' + tem.join('/');
        }else{
          //相对路径输出
          for(let [index,value] of args.entries()){
            if(value == '..'){
              if(index != 0){
                tem.pop();
              }else{
                tem = ['.'];
              }
            }else if(value == '.'){
              continue;
            }else{
              tem.push(value);
            }
          }
          return './' + tem.join('/');
        }
      }
      case 3:{
        var tem = [];
        if(data.path){
          //绝对路径输出
          for(let [index,value] of args.entries()){
            if(value == '..'){
              if(index != 0){
                tem.pop();
              }else{
                tem = ['/'];
              }
            }else if(value == '.'){
              continue;
            }else{
              tem.push(value);
            }
          }
          return '/' + tem.join('/');
        }else{
          //相对路径输出
          for(let [index,value] of args.entries()){
            if(value == '..'){
              if(index != 0){
                tem.pop();
              }else{
                tem = ['.'];
              }
            }else if(value == '.'){
              continue;
            }else{
              tem.push(value);
            }
          }
          return './' + tem.join('/');
        }
      }
    }
  }
  
  /**
   * 获取系统列表
   * @param {string} name
   * @returns {number[]|number}
  */
  static getSystemList(name='def'){
    const systemList = {
      windows:1,
      unix:2,
      macos:3,
      def:0
    }
    switch(name){
      case 'windows':{
        return systemList.windows;
      }
      case 'unix':{
        return systemList.unix;
      }
      case 'macos':{
        return systemList.macos;
      }
      default:{
        return systemList.def;
      }
    }
  }
}

module.exports = Path;
