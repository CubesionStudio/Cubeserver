/*
┌─────────────────────────────────────────────────────
│Model.Base
│─────────────────────────────────────────────────────
│所有模型均要继承本类
└─────────────────────────────────────────────────────
*/

export default abstract class ModelBase{
  public constructure:any;
  constructor(){}
  public abstract getData():object;
}
