import React from 'react';
import { 
    Container,
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
    Form,
    Button,
    CardFooter
} from 'reactstrap';
import axios from 'axios';
class FormExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nama:'',
            telp:''
        };
    }

    kirim=(ev)=>{
        axios.post('http://localhost:3500/form-input', this.state).then(res=>{
            if(res=="sukses"){
                this.setState({nama:'', telp:''});
            }
        })
        this.props.onChangeView('table');
    }

    render(){
        return(
            <Card>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label>Nama : </Label>
                            <Input type="text" value={this.state.nama} placeholder="Nama" onChange={ev=>this.setState({nama:ev.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Nomor Telepon : </Label>
                            <Input type="text" value={this.state.telp} placeholder="Telepon" onChange={ev=>this.setState({telp:ev.target.value})}/>
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter>
                    <Button onClick={this.kirim}>Kirim</Button>
                </CardFooter>
            </Card>
        )
    }
}
export default FormExample;