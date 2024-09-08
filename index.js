//given an array, give me back a new array in which every value in multiplied by 2

//[1,2,3,4,5]
//[2,4,6,8,10]

// const input = [1,2,3,4,5];
// const newArray=[];

// for(let i=0; i<input.length; i++){
//     newArray.push(input[i]*2);
// }
// console.log(newArray)




const input = [1,2,3,4,5];

// function transform(i){
//     return i*2;
// }
// const ans = input.map(transform);

const ans = input.map(function (i) {
    return i * 2;
});

console.log("dil tuta ashiqe");



console.log(ans);