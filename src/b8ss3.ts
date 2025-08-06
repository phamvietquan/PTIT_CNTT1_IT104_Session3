const toNumber = (value: number | string ) : number | null =>{
    const num = typeof value ==="string" ? Number(value) : value
    return isNaN(num)? null: num;
}
const add = (a:number|string, b:number|string): number | string=>{
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    return num1 == null || num2 == null?"tham so khong hp le": num1+num2
}
const subtract = (a:number|string, b:number|string):number | string=>{
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    return num1 == null || num2 == null? "tham so khong hop le":num1-num2
}
const multiply = (a:number|string, b:number|string): number | string=>{
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    return num1 == null || num2 == null?"tham so khong hp le": num1*num2
}
const divide = (a: number | string, b: number | string): number | string => {
  const num1 = toNumber(a);
  const num2 = toNumber(b);
  return num1 == null || num2 == null || num2===0 ? "tham so khong hp le" : num1 / num2;
};
console.log(add("1",2));
console.log(subtract("10",3));
console.log(multiply(4,"2"));
console.log(divide("8",4));
console.log("ac", 12);



