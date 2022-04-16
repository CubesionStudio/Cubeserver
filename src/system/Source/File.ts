/*
┌─────────────────────────────────────────────────────
│Source.File
│─────────────────────────────────────────────────────
│操作文件
└─────────────────────────────────────────────────────
*/
import * as fs from 'fs/promises';

export default class File{
  public static async open(path:string):Promise<fs.FileHandle>{
    try{
      await fs.open();
    }catch(e){
      
    }
  }
  
  static async read():Promise<string>{
    
  }
}
