let input: string = "hello world";
let output:string ="";
for(let i =0; i<input.length; i++){
    if(!output.includes(input[i])){
        output+=input[i];
    }

}
console.log(output);
