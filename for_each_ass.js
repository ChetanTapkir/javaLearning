const array =[1,-7,40,502,-77,91,0,108,89,-601];
array.forEach((value,index)=>{
    console.log("VALUE IN ARRAY:",value,"INDEX OF ARRAY",index);
    })

    console.log("=================PRINT POSITIVE NO IN ARRAY===============");
    const posarray =[]
    array.forEach((value)=>{if(value>0){posarray.push(value) }
    
    });console.log(posarray);
    
    console.log("=================PRINT NEGETIVE NO IN ARRAY================");
    const negarray =[];
    array.forEach((value,)=>{if(value<0){ negarray.push(value)}
     });console.log(negarray);

     console.log("=================PRINT EVEN  NO IN ARRAY================");
     const evenN0 =[];
     array.forEach((value,)=>{if(value%2==0){ evenN0.push(value)}
     });console.log(evenN0);
     console.log("=================PRINT SUM OF ALL  NO IN ARRAY================");
     var sum=0;
     array.forEach((value)=>{
        
        sum=sum+value;  
     });console.log(`Addition of all no in array is : ${sum} `);
     console.log("=================Even And Position array ================");
     const evenpos =[];
     array.forEach((value,i)=>{if(i%2==0){ evenpos.push(value)}
     });console.log(evenpos);