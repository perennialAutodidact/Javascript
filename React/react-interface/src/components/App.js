import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
import { without, findIndex } from 'lodash';

class App extends Component {
    constructor(){
        super();
        this.state = {
            myAppoinments: [],
            formDisplay: false,
            lastIndex: 0,
            orderBy: 'petName',
            orderDir: 'asc',
            queryText: '',
        }
        
        this.changeOrder = this.changeOrder.bind(this);
        this.addAppointment = this.addAppointment.bind(this);
        this.updateInfo = this.updateInfo.bind(this)
        this.deleteAppointment = this.deleteAppointment.bind(this);
        this.searchApts = this.searchApts.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    changeOrder(order, dir){
        this.setState({
            orderBy: order,
            orderDir: dir
        })
    }

    addAppointment(apt){
        let tempApts = this.state.myAppoinments;
        apt.aptId = this.lastIndex;
        tempApts.unshift(apt);

        this.setState({
            myAppoinments: tempApts,
            formDisplay: false,
            lastIndex: this.state.lastIndex + 1
        })
    }

    updateInfo(name, value, id) {
        let tempApts = this.state.myAppoinments;
        let aptIndex = findIndex(this.state.myAppoinments, {
            aptId: id,

        });
        tempApts[aptIndex][name] = value;
        this.setState({
            myAppoinments:tempApts
        })
    }

    deleteAppointment(apt) {
        let tempApts = this.state.myAppoinments;
        tempApts = without(tempApts, apt);

        this.setState({
            myAppoinments: tempApts
        })
    }

    searchApts(query){
        this.setState({
            queryText : query
        })
    }
    
    toggleForm(){
        this.setState({
            formDisplay: !this.state.formDisplay
        });
    }

    componentDidMount() {
        fetch('./data.json')
            .then(response => response.json())
            .then(result => {
                const apts = result.map(item => {
                    item.aptId = this.state.lastIndex;
                    this.setState({
                        lastIndex: this.state.lastIndex + 1
                    })
                    return item;
                });
                this.setState({
                    myAppoinments:apts,
                });
            });
    }

    render() {

        let order;
        let filteredApts = this.state.myAppoinments;
        if(this.state.orderDir === 'asc'){
            order = 1;
        } else {
            order = -1;
        }

        filteredApts = filteredApts.sort((a,b) => {
            if(a[this.state.orderBy].toLowerCase() <
               b[this.state.orderBy].toLowerCase()){
                   return -1 * order;
            } else {
                return 1 * order;
            }

        }).filter(eachItem => {
            return (
                eachItem['petName']
                .toLowerCase()
                .includes(this.state.queryText.toLowerCase()) ||
            
                eachItem['ownerName']
                .toLowerCase()
                .includes(this.state.queryText.toLowerCase()) ||
                
                eachItem['aptDate']
                .toLowerCase()
                .includes(this.state.queryText.toLowerCase())
            );
        })

        return(
            <main className="page bg-white" id="petratings">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 bg-white">
                    <div className="container">
                        <AddAppointments 
                            formDisplay={this.state.formDisplay}
                            toggleForm={this.toggleForm}
                            addAppointment={this.addAppointment}
                        />
                        <SearchAppointments 
                            orderBy={this.state.orderBy}
                            orderDir={this.state.orderDir}
                            changeOrder={this.changeOrder}
                            searchApts={this.searchApts}
                        />
                        <ListAppointments 
                            appointments={filteredApts}
                            deleteAppointment={this.deleteAppointment}
                            updateInfo={this.updateInfo}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </main>
        )
    }
}

export default App;
