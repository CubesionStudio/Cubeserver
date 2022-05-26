/*
┌─────────────────────────────────────────────────────
│Model.Error.Base
│─────────────────────────────────────────────────────
│Error基类
└─────────────────────────────────────────────────────
*/
/**
 * @class
 * @abstract
*/
class ErrorBase{
  /**
   * @abstract
   * @returns {object}
  */
  constructor(){}
  output(){}
}

module.exports = ErrorBase;
