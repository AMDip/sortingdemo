export function MergeSortAlgorithm(array){
    const sortedArray = array.slice();
    const tempArray= array.slice();
    const animations=[]

    MergeSort(sortedArray, tempArray, 0, sortedArray.length-1, animations);
    let sortedAnimation={
        sortedArray: sortedArray,
        animations: animations
    }
    return sortedAnimation;
}

function MergeSort(mainArray, tempArray, leftStart, rightEnd, animations){
    if(leftStart === rightEnd) return;
    const middleIndx = Math.floor((leftStart + rightEnd) / 2);

    MergeSort(mainArray, tempArray, leftStart, middleIndx, animations);
    MergeSort(mainArray, tempArray,  middleIndx + 1, rightEnd, animations);
    DoMerge(mainArray, tempArray, leftStart, rightEnd, animations);
}

function DoMerge(mainArray, tempArray, leftStart, rightEnd, animations){
    let leftEnd= Math.floor( (leftStart + rightEnd)/ 2 );
    let rightStart= leftEnd + 1;
    let indx= leftStart;

    while(leftStart <= leftEnd && rightStart <= rightEnd){
        // pushing animation indices twice, one to change the color of the indx
        // that are being compared and one for changing the color back
        animations.push([leftStart, rightStart]);
        animations.push([leftStart, rightStart]);
        if(tempArray[leftStart] <= tempArray[rightStart]){
            mainArray[indx] = tempArray[leftStart];
            animations.push([indx, mainArray[indx]]);
            leftStart++;
        }else{
            mainArray[indx] = tempArray[rightStart];
            animations.push([indx, mainArray[indx]]);
            rightStart++;
        }
        indx++;
    }
    while(leftStart <= leftEnd){
        // pushing animation indices twice, one to change the color of the indx
        // that are being compared and one for changing the color back
        animations.push([leftStart, leftEnd]);
        animations.push([leftStart, leftEnd]);
        mainArray[indx] = tempArray[leftStart];
        animations.push([indx, mainArray[indx]]);
        leftStart++;
        indx++;
    }
    while(rightStart <= rightEnd){
        // pushing animation indices twice, one to change the color of the indx
        // that are being compared and one for changing the color back
        animations.push([rightStart, rightEnd]);
        animations.push([rightStart, rightEnd]);
        mainArray[indx] = tempArray[rightStart];
        animations.push([indx, mainArray[indx]]);
        rightStart++;
        indx++;
    }
    arrayCopy(mainArray,0,tempArray,0, tempArray.length);
}

function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }

export function bubbleSortAlgo(array){
    let animations=[];
    let aux=[];

    for (let i=0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
          // pushing animation indices twice, one to change the color of the indx
          // that are being compared and one for changing the color back
          animations.push([j,j+1])
          animations.push([j,j+1])
          if (array[j] > array[j+1]) {
            aux = array[j];
            array[j] = array[j+1];
            array[j+1] = aux;
          }
          // every 3rd row, we need to update div's indxs with new height
          animations.push([j, array[j], j+1 ,array[j+1]]);
        }
      }

      let sortedAnimation={
          sortedArray: array,
          animations: animations
      };
      return sortedAnimation;
}

export function quickSortAlgo(array){
    let sortedArray=array.slice();
    let animations=[];
    quickSort(array, 0, array.length - 1, animations);
    let sortedAnimation={
        sortedArray: sortedArray,
        animations: animations
    }
    return sortedAnimation;
}

function quickSort(array, startIndx, endIndx, animations){
    if(startIndx >= endIndx) { 
        return;
    }
    // selecting pivot to be the value from the middle of the array, but 
    // it could be any other value of the array
    let pivot = array[Math.floor((startIndx + endIndx) / 2)];
    let partitionPosition = partition(array, startIndx, endIndx, pivot, animations);
    
    quickSort(array, startIndx, partitionPosition, animations);
    quickSort(array, partitionPosition+1, endIndx, animations);
}

function partition(array, startIndx, endIndx, pivot, animations){
    let i=startIndx;
    let j=endIndx; 
    let pivotindx= Math.floor((startIndx + endIndx) / 2);

    // iterate as long as start position is not less than end position
    while (i <= j){
        // checks if the values on the left of the pivot are 
        // less than the pivot's value
        while(array[i] < pivot){
            animations.push([i, pivotindx]);
            animations.push([i, pivotindx]);
            animations.push([i, array[i], j, array[j]]);
            i++; 
        }
        // checks if the values on the right of the pivot are 
        // less than the pivot's value
        while(array[j] > pivot){
            animations.push([j, pivotindx]);
            animations.push([j, pivotindx]);
            animations.push([i, array[i], j, array[j]]);
            j--; 
        }
        if(i <= j){ 
            animations.push([i, j]);
            animations.push([i, j]);
            // with this swap we move values to the correct side of the pivot
            [array[i], array[j]] = [array[j], array[i]];
            animations.push([i, array[i], j, array[j]]);
            //after swapping, we need to continue with the next left and right position
            i++;
            j--;
        }
    }
    // returning the index of the sorted pivot position of this partition,
    // indx i would be 1 position ahead after the last swap
    return --i;
}
