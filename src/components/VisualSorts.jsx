import React from "react";
import "./VisualSorts.css";
import { MergeSortAlgorithm,
         quickSortAlgo,
         bubbleSortAlgo } from "./Algorithms";

const MAX_BAR_SIZE = 500;
const NUMBER_OF_BARS = 80;

// Speed of the animations.
const ANIMATION_SPEED_MS = 50;

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
    //this method tests the sortings algorithm against large unsorted arrays
    //testSorting();
  }

  createBars() {
    let bars = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      bars.push(createRandomFromInterval(5,MAX_BAR_SIZE));
    }
    this.setState({ bars: bars });
  }

  refreshBars(){
    window.location.reload(false);
  }

  mergeSort(){
    const array = this.state.bars.slice();
    const bar = document.getElementsByClassName("bar-1");
    const {animations} = MergeSortAlgorithm(array);
    console.log(animations);
    //this.setState({bars: sortedArray});
    for(let i=0; i < animations.length; i++){
      //If the modulus of 3 is equal to 2, this means that its the 3dr iteration
      //and we need to change the size of the bars if they are different
      if(i%3 === 2){
        const [index1, height1] = animations[i];
        const barStyle1 = bar[index1].style;
        setTimeout( () => {
        barStyle1.height = `${height1}px`;
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

  quickSort(){
    //let array=[3,5,8,9,3,6,15,12,16];
    const array = this.state.bars.slice();
    //this.setState({bars: array});
    const bar = document.getElementsByClassName("bar-1");
    const {animations} = quickSortAlgo(array);
    for(let i=0; i < animations.length; i++){
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

  bubbleSort() {
    const array = this.state.bars.slice();
    const bar = document.getElementsByClassName("bar-1");
    const {animations} = bubbleSortAlgo(array);

    for(let i=0; i < animations.length; i++){
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
        <header>
          <img className="sort-logo" src={require("../ordenar-2.svg")} alt="logo"></img>
          <nav className="navbar_sorts">
            <ul >
              <li><a href="#" onClick={() => this.bubbleSort()}>Bubble Sort</a></li>
              <li><a href="#" onClick={() => this.mergeSort()}>Merge Sort</a></li>
              <li><a href="#" onClick={() => this.quickSort()}>Quick Sort</a></li>
              <li><a className="refresh" href="#" onClick={()=>this.refreshBars()}>Refresh Bars</a></li>
            </ul>
          </nav>
        </header>
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
      </div>
    );
  }
}

function testSorting(){
  //creating 100 comparisons to test the sort
  for(let i=0; i < 100; i++){
    let array=[]
    let length= createRandomFromInterval(500,1000)

    //creates a new random array
    for(let i=0; i<length; i++){
      array.push(createRandomFromInterval(-1000,1000));
    }
    const sortedArrayWithMethod = array.slice();
    sortedArrayWithMethod.sort( (a,b)=> a-b )

    let { sortedArray: mergeSortArray} = MergeSortAlgorithm(array);
    let { sortedArray: bubbleSortArray} = bubbleSortAlgo(array);
    let { sortedArray: quickSortArray} = quickSortAlgo(array);

    //sorts the array using js sorting method
    //comparing the two arrays to verify the the created array is sorted correctly
    console.log(arraysAreEqual(sortedArrayWithMethod, mergeSortArray));
    console.log(arraysAreEqual(sortedArrayWithMethod, bubbleSortArray));
    console.log(arraysAreEqual(sortedArrayWithMethod, quickSortArray));
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
