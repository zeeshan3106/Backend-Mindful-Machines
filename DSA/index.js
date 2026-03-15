

///Static Progrming

/*
  for (let i = 0 ; i<=1; i++){
    process.stdout.write("^ ")
  }
  console.log()
    for (let i = 0 ; i<=2; i++){
     process.stdout.write("^ ")
  }
  console.log()
    for (let i = 0 ; i<=3; i++){
    process.stdout.write("^ ")
  }
  console.log()
    for (let i = 0 ; i<=4; i++){
      process.stdout.write("^ ")
  }
  console.log()
    for (let i = 0 ; i<=5; i++){
        process.stdout.write("^ ")
  }  */


  //Dynnamc Programing ...

console.log()


const a = 5


for (let i = 0 ; i<=a; i++){


    for(let j=0; j<=a ; j++){  //firstly this woudbe completed...

        process.stdout.write("* ")
       


    }

console.log()



}
const bubblesorting = [5,1,3,8,10,2]
let n= bubblesorting.length
for(let i=0; i<=n-1 ; i++){


    for(let j=0; j<=n-1-i;j++){

        if(bubblesorting[j]>bubblesorting[j+1]){

            let temp = bubblesorting[j]
            bubblesorting[j]=bubblesorting[j+1]
            bubblesorting[j+1]=temp

     
        }

 
    }



console.log()


}


console.log(bubblesorting)


//Bubble Sort---------------------------
const sorting = [6,9,20,1,4,8,90]

let g=sorting.length

for(let i =0 ; i<=g-1; i++){

    for(let j=0; j<=g-1-i; j++){


        if(sorting[j]>sorting[j+1]){



            let temp = sorting[j]
            sorting[j]=sorting[j+1]
            sorting[j+1]=temp





        }


    }





}

console.log(sorting)






//-----------------Bubble Sort------------------//


const bubble = [100,20,50,120,10,60,90,30]
let ln= bubble.length
for(let i = 0; i<=ln-1; i++){

    for(let j=0; j<=ln-1-i; j++){


       if(bubble[j]>bubble[j+1]){

             let temp = bubble[j]
             bubble[j]=bubble[j+1];
             bubble[j+1]=temp;
       }






    }

    console.log()


}

console.log("Bubble Sort",bubble)


//-------------------Selection Sort-----------------//


const selection = [90,60,40,100,5,2,1]

let s=selection.length

for(let i=0; i<=s-1 ;i++){


let min = i;
    for(let j=i+1; j<=s; j++){

        if(selection[min]>selection[j])
            min=j }
        
        if(min!=i){

            let temp = selection[min];
            selection[min]=selection[i];
            selection[i]=temp








    }





}



console.log(selection)




//---------------Selection Sorting------------///




const selecting = [1,56,90,45,87,3,5]

let sl = sorting.length





for(let i=0; i<=sl; i++){
let min = i;

    for(let j=i+1; j<=sl;j++){


        if(selecting[min]>selecting[j])
            min=j



    }

    if(min!=i){
   let temp= selecting[min]
   selecting[min]=selecting[i]
   selecting[i]=temp




    }
    










}
console.log("Selection Sort",selecting)




//------------------Insertion Sort------------------//

const insert = [60,20,10,20,50]
let ir = insert.length

for (let i=0; i<=ir-1; i++){


    let key = insert[i]

    let j=i-1


    while(insert[j]>=0 && insert[j]>key){


        insert[j+1]=insert[j]
        j--




    }

   insert[j+1]=key



}



console.log("Insertion Sort",insert)

//---------------Quick Sort-----------------------//




//--------------Extereme----Merge Sort------------------------//


//======================Quick Sorting====================//


function FindPivotIndex (array, first, last){

    let pivot = array[first]

    let i = f+1;
    let j=last;

    while(i<=j){

    while(i<=last && array[i]<=pivot) i++

    while(j>=first && array[j]>=pivot)j--

    if(i<j){

        swap(array , i, j)
    }
    }


    swap(array , j, first)
    return j;

}


function swap (array ,i, j){


    let temp = array[i]
    array[i]=array[j]
    array[j]=temp



}






























function conquer(array, first, last, midium){

    let i=first , j=midium+1, k=0;

    while(i<=midium && j<=last){

        if(array[i]<array[j]){
          temp[k++]=array[i++]

        }
}

while(array[i]<=mid){
   temp[k++]=array[i++]
}

while(array[j]<=last){
       temp[k++]=array[j++]
}


}




function divide(array, first, last, midium){
    let midium = (last+first)/2
  if(first >= last) return
    divide(array, first, midium)
    divide(array, midium, last)

    conquer(array, first, midium, last)

}

let array = [50,70,4,3,2,90,1]
divide(array, 0, array.length)
console.log(array)





























