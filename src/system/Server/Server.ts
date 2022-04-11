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
  constructor(){
    
  }
  public start(host:string,port:number):void{
    
  }
  
  public getInterface():Interface{
    return new Interface();
  }
}
