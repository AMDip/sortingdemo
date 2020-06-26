export function MergeSortAlgorithm(array){
    const sortedArray = array.slice();
    const tempArray= array.slice();
    MergeSort(sortedArray, tempArray, 0, sortedArray.length-1);
    return sortedArray;
}

function MergeSort(mainArray, tempArray, leftStart, rightEnd){
    if(leftStart === rightEnd) return;
    const middleIndx = Math.floor((leftStart + rightEnd) / 2);

    MergeSort(mainArray, tempArray, leftStart, middleIndx);
    MergeSort(mainArray, tempArray,  middleIndx + 1, rightEnd);
    DoMerge(mainArray, tempArray, leftStart, rightEnd);
}

function DoMerge(mainArray, tempArray, leftStart, rightEnd){
    let leftEnd= Math.floor( (leftStart + rightEnd)/ 2 );
    let rightStart= leftEnd + 1;
    let indx= leftStart;

    while(leftStart <= leftEnd && rightStart <= rightEnd){
        if(tempArray[leftStart] <= tempArray[rightStart]){
            mainArray[indx] = tempArray[leftStart];
            leftStart++;
        }else{
            mainArray[indx] = tempArray[rightStart];
            rightStart++;
        }
        indx++;
    }
    while(leftStart <= leftEnd){
        mainArray[indx] = tempArray[leftStart];
        leftStart++;
        indx++;
    }
    while(rightStart <= rightEnd){
        mainArray[indx] = tempArray[rightStart];
        rightStart++;
        indx++;
    }
    arrayCopy(mainArray,0,tempArray,0, tempArray.length);
}

function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }