export function runEx18(): void {
  class MathUtil {
    static add(a:number,b:number){ return a+b; }
    static subtract(a:number,b:number){ return a-b; }
    static multiply(a:number,b:number){ return a*b; }
    static divide(a:number,b:number){ return a/b; }
  }
  console.log("MathUtil:", MathUtil.add(2,3), MathUtil.subtract(5,1), MathUtil.multiply(3,4), MathUtil.divide(10,2));
}
