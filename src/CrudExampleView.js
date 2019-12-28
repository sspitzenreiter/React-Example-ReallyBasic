import React from 'react';
import TableExample from './TableExample';
import FormExample from './FormExample';
import {Container} from 'reactstrap';
class CrudExampleView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view:'table'
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView(tempview){
        this.setState({view:tempview});
    }

    render(){
        var viewtemp = '';
        switch(this.state.view){
            case "table": viewtemp = <TableExample onChangeView={this.changeView}/>; break;
            case "form": viewtemp = <FormExample onChangeView={this.changeView}/>; break;
        }
        return(
            <Container>
                {viewtemp}
            </Container>
        )
    }
}
export default CrudExampleView;