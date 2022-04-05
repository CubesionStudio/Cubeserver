/*
┌─────────────────────────────────────────────────────
│Server.Server
│─────────────────────────────────────────────────────
│服务器总程序
└─────────────────────────────────────────────────────
*/
import Interface from './Interface';

export default class Server{
  private readonly network:{ip:string,port:number};
  constructor(config:{ip:string,port:number}){
    
  }
  public static getInterface():Interface{
    return new Interface();
  }
}
