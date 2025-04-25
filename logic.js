// 1. For the array [20, 50, 90, 12, 3], find the largest value.

        // let array =[20, 50, 90, 12, 3];
        // let largest = 0;
        // for(let i=1;i<array.length;i++){
        //     if(largest < array[i]){
        //         largest = array[i];
        //     }
        // }
        // console.log(largest);
        // ===============================================================================================

        // 2. In the array [20, 50, 90, 12, 3], determine the second largest value.
            // let array =[70, 90, 50, 12, 3];
            // let largest = 0;
            // let secondLargest = 0;
            // for(let i=0;i<array.length;i++){
                
            //     if(largest < array[i]){
            //         secondLargest = largest                    
            //         largest = array[i];
                    
            //     }
            //     if(array[i] > secondLargest &&  array[i] !== largest){
            //         secondLargest = array[i]              
            //     }
            // }
            //  console.log(largest);
            //  console.log(secondLargest);
        // ===========================================================================================================

        // 3. Reverse the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

        // let array3 = [1,2,3,4,5,6,7,8,9,10]
        // let reverseArray = [];
        // let j=0;
        // for (let i=array3.length-1;i>=0;i--){
            
        //         reverseArray[j] = array3[i];
        //         j++;
        // }
        // console.log(reverseArray);    
        // ========================================================================================================

        // 4. Count the number of vowels in a given word or name.

            // let string = 'divakar';
            // let name = string.toLowerCase() ;
            // let vowelsCount =0;
            // let vowelsLetters = "";
            // for(let i=0;i<name.length;i++){
            //     if(name[i] === "a" || name[i] === "e" || name[i] === "i" || name[i] === "o" || name[i] === "u"){
            //         vowelsCount++;
            //         vowelsLetters+=name[i];
                    
            //     }
                
                
            // }
            // console.log(`This is a Vowels Letters = ${vowelsLetters}, This is a VowelsCount = ${vowelsCount}`);
        // ======================================================================================================================
        
        // 5. In the array [2, 3, 2, 4, 2, 1, 3, 5, 7, 6, 7], remove duplicate values and return the unique values in ascending order.
        
            // let array4 = [2, 3, 2, 4, 2, 1, 3, 5, 7, 6, 7];
            // let correctArray = array4[0];
            // for (let i=0;i<array4.length;i++){
            //    for(let j=i+1;j<array4.length;j++){
            //     if(array4[i] === array4[j]){
            //         for(let k=j+1;k<array4.length;k++){
            //             array4[j]=array4[k];
                        
            //         }                    
            //         array4.length=array4.length-1
            //     }
            //    }

            // }
            // console.log(array4);
            // for(let i=0;i<array4.length;i++){
            //     for(let j=0;j<array4.length;j++){
            //         if(array4[j]>array4[j+1]){
            //             let temp =array4[j];
            //             array4[j]= array4[j+1];
            //             array4[j+1]=temp;

            //         }
            //     }
            // }
            // console.log(array4);    
        // =====================================================================================================================================================

        // 6. In the array [1, 12, 10], find the missing number.

        // let array5 = [1,12,10];
        // let missingNumber = [];
        // let min = array5[0];
        // let max = array5[0];
        // let index = 0;

        // for(let i=0;i<array5.length;i++){
        //     if(array5[i] < min){
        //         min = array5[i];
        //     }
        //     if(array5[i] > max){
        //         max = array5[i];
        //     }
        // }
        
        // for (let j =1;j < max;j++){
        //     let flag =false;
        //     for (let k =0; k < array5.length;k++){
        //         if(array5[k] === j){
        //             flag = true;
        //             break;
        //         }
        //     }
        //     if(!flag){
        //         missingNumber[index]=j;
        //         index++;
        //     }
        // }
        // console.log(missingNumber);
        
        // ======================================================================================================

        // 7. Count the decimal places in the number [348.97].
                // let number = '3458.9770';
                // let string = ""+number;
                // let count = 0;
                // for(let i=0;i<string.length;i++){
                //     if(string[i] == "."){
                //         for(let j=i+1;j<string.length;j++){
                //             count++;
                //         }
                //     }      
                // }
                // console.log(count);
        // ========================================================================================================================

        // 8. In the array [2, 5, 1, 4, 2, 1, 0, 2, 9], identify the highest repeated number and count its occurrences.
        
            // let array7 =[2,5,1,4,2,1,0,2,9];
            // let sameValue = 0;
            // let repeated =0;
            // let final;
            // for (let i=0;i<array7.length;i++){
            //     for(let j=i;j<array7.length;j++) {
            //         if(array7[i] === array7[j]){
            //            sameValue++;
            //         }
            //     }  
            //     if(repeated<sameValue){
            //         repeated=sameValue
            //             final=array7[i]
            //         }   
            //         sameValue=0          
            // }
            // console.log(final,repeated);            
        // =======================================================================================================================================
        // 9. Search within the strings ['test', 'organisation', 'abc'].

        // let string =['test','organisation','abc'];
        // function stringValue (value){
        //     for(let i=0;i<string.length;i++){
        //         if(value === string[i]){
        //             return 1;                    
        //         }                      
        //     }
        //     return -1;
        // }
        // console.log(stringValue('road'));

        // =============================================================================================================================
        // 10. In the word 'Engineering', count the occurrences of each letter as follows:{E: 3,N: 3,G: 2}

        //    function count(value){
        //     let obj ={};
        //     for(let str of value){
        //         obj[str] = (obj[str] || 0) +1;
        //     }
        //     return obj;
        //    }

        //    let value = 'engineering';
        //    console.log(count(value));
           
        
