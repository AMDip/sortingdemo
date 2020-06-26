import React from "react";
import "./VisualSorts.css";
import { MergeSortAlgorithm } from "./Algorithms";

const MAX_BAR_SIZE = 500;
const NUMBER_OF_BARS = 50;

// Speed of the animations.
const ANIMATION_SPEED_MS = 100;

// Main color of the array bars.
const PRIMARY_COLOR = "blueviolet";

// The color of the bars when they are compared.
const SECONDARY_COLOR = "red";

export default class VisualSorts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: [],
    };
  }

  componentDidMount() {
    this.createBars();
    testSorting();
    //testing merge sort algorithm
    // let test = [4, 6, 2, 3, 9, 5, 7, 8, 0, 1]
    // MergeSortAlgorithm(test);
  }

  createBars() {
    let bars = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      bars.push(createRandomFromInterval(5,MAX_BAR_SIZE));
    }
    this.setState({ bars: bars });
  }

  bubbleSort() {
    const array = this.state.bars.slice();
    let i=0;
    let j=0;
    let aux = [];
    let animations=[];
    const bar = document.getElementsByClassName("bar-1");

    for (i=0; i < array.length-1; i++) {
      for (j = 0; j < array.length-i-1; j++) {
        animations.push([j,j+1])
        animations.push([j,j+1])
        if (array[j] > array[j+1]) {
          aux = array[j];
          array[j] = array[j+1];
          array[j+1] = aux;
        }
        animations.push([j, array[j], j+1 ,array[j+1]]);
      }
    }

    for(i=0; i < animations.length; i++){
      //If the modulus of 3 is equal to 2, this means that its the 3dr iteration
      //and we need to change the size of the bars if they are different
      if(i%3 === 2){
        const [index1, height1, index2, height2] = animations[i];
        const barStyle1 = bar[index1].style;
        const barStyle2 = bar[index2].style;
        setTimeout( () => {
        barStyle1.height = `${height1}px`;
        barStyle2.height = `${height2}px`;;
        }, i * ANIMATION_SPEED_MS);
      }else{
        //if modulus of 3 equal 0, this is the 1st iteration, so we change color for comparison
        if(i%3 === 0){
          const [index1, index2] = animations[i];
          const barStyle1 = bar[index1].style;
          const barStyle2 = bar[index2].style;
          setTimeout( () => {
          barStyle1.backgroundColor = SECONDARY_COLOR;
          barStyle2.backgroundColor = SECONDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }else{
          //if modulus of 3 equal 1, this is the 2st iteration, so we change color back
          const [index1, index2] = animations[i];
          const barStyle1 = bar[index1].style;
          const barStyle2 = bar[index2].style;  
          setTimeout( () => {
          barStyle1.backgroundColor = PRIMARY_COLOR;
          barStyle2.backgroundColor = PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
     }
    } 
  }

  render() {
    return (
      <div>
        <div className="bar-container-div">
          {this.state.bars.map((item, index) => (
            <div
              className="bar-1"
              key={index}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${item}px`
            }}></div>
          ))}
        </div>
          <div>
            <button onClick={() => this.createBars()}>reset bars</button>
            <button onClick={() => this.bubbleSort()}>sort bars</button>
            <button onClick={() => this.mergeSort()}>sort bars</button>
          </div>
      </div>
    );
  }
}

function testSorting(){
  //creating 100 comparisons to test the sort
  for(let i=0; i < 100; i++){
    let array=[]
    let aux=[];
    let length= createRandomFromInterval(500,1000)

    //creates a new random array
    for(let i=0; i<length; i++){
      array.push(createRandomFromInterval(-1000,1000));
    }
    const sortedArrayWithMethod = array.slice();

    //bubble sorting algorithm
    // for (let i=0; i < array.length-1; i++) {
    //   for (let j = 0; j < array.length-1; j++) {
    //     if (array[j] > array[j+1]) {
    //       aux = array[j];
    //       array[j] = array[j+1];
    //       array[j+1] = aux;
    //     }
    //   }
    // }
    let testArray = MergeSortAlgorithm(array);
    //sorts the array using js sorting method
    sortedArrayWithMethod.sort( (a,b)=> a-b )
    //comparing the two arrays to verify the the created array is sorted correctly
    console.log(arraysAreEqual(sortedArrayWithMethod, testArray));
  }
}

function createRandomFromInterval(min, max) {
  let random = Math.floor(Math.random() * (max - min)) + min;
  return random;
}

function arraysAreEqual(array1, array2){
  for(let i=0; i<array1.length; i++){
    if (array1[i] !== array2[i]) { return false; }
  }
  return true;
}
