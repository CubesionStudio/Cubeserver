import ModelBase from '../Base';

class FileException extends ModelBase{
  public readonly constructure:[number,string];
  constructor(code:number,message:string){
    super();
    this.constructure.push(code,message);
  }
  
  public getData():object{
    let code:number = this.constructure[0];
    let message:string = this.constructure[1];
    return {
      code,
      message
    };
  }
}
