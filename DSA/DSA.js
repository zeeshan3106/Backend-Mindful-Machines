
//-----------------------------Array--------------------------//

//Reverse String of Array
  const array = [1,2,3,4,5,6,7,8,9,10]
let i = 0, j=0;

let temp = []
  for(let i = array.length-1 ; i>=0; i--){
 
    temp[j]=array[i];

    j++

  }

  console.log(temp)



  // Categorizing 0 and 1   two pointer technique

const arraytoarrange = [0,1,0,1,1,0,0,1]
let d=0;
 for (let i = 0; i<=arraytoarrange.length ; i++){

    if(arraytoarrange[i]==0){

        let temporary = arraytoarrange[i];
        arraytoarrange[i]=arraytoarrange[d];
        arraytoarrange[d]=temporary
        d++

    }

  }
console.log(arraytoarrange)













