import React,{Component} from 'react';
import LabelList from '../components/LabelList/LabelList';
import AddLabel from '../components/AddLabel/AddLabel';
import AddButton from '../ui/AddButton/AddButton';

class App extends Component{
  state = {
    labelList: [
      {
        labelName: 'Complete',
        labelColor: '#00FF00',
        id: Math.random()
      },
      {
        labelName: 'Info',
        labelColor: '#0000FF',
        id: Math.random()
      }
    ],
    showAddLabel: false
  }
  showAddHandler = () =>{
    this.setState({showAddLabel: !this.state.showAddLabel});
  }
  addHandler = (labelName, labelColor) => {
    const newLabel ={
      labelName,
      labelColor,
      id:Math.random
    }
    this.setState({showAddLabel: false});
    const labelList = [...this.state.labelList];
    const updateLabelList = labelList.concat([newLabel]);
    this.setState({labelList: updateLabelList});
  }
  editHandler = (labelName, labelColor, id) => {
    const labelIndex = this.state.labelList.findIndex(l=>(l.id === id));
    const label={labelName, labelColor};
    const updateLabelList = [...this.state.labelList];
    updateLabelList[labelIndex] = label;
    this.setState({labelList:updateLabelList});
  }
  render (){
    return(
      <div className="container">
        <h3 className="p-2">Stage Player</h3>
        <div className="row">
          <div className="col-4">
            <LabelList {...this.state} edit={(labelName, labelColor, id) => this.editHandler(labelName, labelColor ,id)}></LabelList>
            <AddButton click={this.showAddHandler}></AddButton>
            {this.state.showAddLabel ? <AddLabel add={(labelName,labelColor) => this.addHandler(labelName,labelColor)}></AddLabel> : null}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
