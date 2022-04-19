/*
┌─────────────────────────────────────────────────────
│Source.File
│─────────────────────────────────────────────────────
│操作文件
└─────────────────────────────────────────────────────
*/
import * as fs from 'fs/promises';
import FileException from '../Model/Exception/FileException';

export default class File{
  public static async open(path:string):Promise<fs.FileHandle>|FileException{
    try{
      let file = await fs.open(path,'w+');
      return file;
    }catch(e){
      return new FileException()
    }
  }
  
  static async read(path:string,mode:number):Promise<string>{
    try{
      
    }catch(e){
      
    }
  }
}
