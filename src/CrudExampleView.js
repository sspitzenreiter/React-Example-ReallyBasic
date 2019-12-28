import React from 'react';
import TableExample from './TableExample';
import FormExample from './FormExample';
import {Container} from 'reactstrap';
class CrudExampleView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view:'table',
            form_data:null
        }
        this.changeView = this.changeView.bind(this);
        this.changeViewWithUpdate=this.changeViewWithUpdate.bind(this);
    }

    changeView(tempview){
        this.setState({view:tempview});
    }

    changeViewWithUpdate(tempview, data){
        this.setState({view:tempview, form_data:data});
    }

    render(){
        var viewtemp = '';
        switch(this.state.view){
            case "table": viewtemp = <TableExample onChangeView={this.changeView}  onUpdateView={this.changeViewWithUpdate}/>; break;
            case "form": viewtemp = <FormExample data={this.state.form_data} onChangeView={this.changeView}/>; break;
        }
        return(
            <Container>
                {viewtemp}
            </Container>
        )
    }
}
export default CrudExampleView;