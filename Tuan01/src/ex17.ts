export function runEx17(): void {
  class Logger {
    private static _instance: Logger | null = null;
    private constructor(){}
    static get instance(){ return this._instance ?? (this._instance = new Logger()); }
    log(msg: string){ console.log(`[LOG] ${msg}`); }
  }
  Logger.instance.log("Xin chào");
}
