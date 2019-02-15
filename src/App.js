import React, { Component } from 'react';
import Measure from 'react-measure'
import './App.css';

class App extends Component {
  state = {cards:[
    {text:"omg", id:0},
    {text:"bbq", id:1},
    {text:"reactIsCrack",id:2},
    {text:"is This working?",id:3},
    {text:"yes It is!",id:4},
    {text:"node killed the php stars",id:5}
  ],
    active:null,
  gridWidth: null,
gridColumns: 3,
gridItemWidth: null}
  changeActive = (id) =>()=>{
    this.setState({active:id})
  }
  updateWidth(){
    const {gridWidth, gridColumns} = this.state
    const gapSize = (gridColumns - 1 ) * 10
    const newWidth = (gridWidth - gapSize) / gridColumns
    this.setState({gridItemWidth:newWidth}, console.log('new width', this.state.gridItemWidth))
  }
  render() {
    return (

      <Measure bounds onResize={contentRect =>{this.setState({gridWidth:contentRect.bounds.width},this.updateWidth)}}>
        {({measureRef})=>(
          <div className="App" ref={measureRef} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr", gridGap:10}}>
            <CardList gridItemWidth={this.state.gridItemWidth} clicked={this.changeActive} active={this.state.active} cards={this.state.cards} className="card"></CardList>
          </div>
        ) }

      </Measure>
    );
  }
}
  

const CardList = ({cards,active, clicked, gridItemWidth}) => {
  return  (
    cards.map(card =>  
      <div style = {card.id === active?{width: gridItemWidth  * 3 / 2}:{width: gridItemWidth  * 3 / 4}} className={`card ${ card.id === active ? 'active' : 'inactive' }`} 
           onClick={clicked(card.id)}>{card.text}
           </div>)
  )
}










export default App;

