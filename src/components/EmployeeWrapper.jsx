import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button, Container, Grid, Header, Segment, Table} from "semantic-ui-react";

class EmployeeWrapper extends Component {
    static propTypes = {};

    render() {
        const {employee} = this.props;

        return (
            <Segment raised>
                            <Segment vertical>
                                <Header as={"h1"}>Employee </Header>
                                <Header as={"h1"}>Name: {employee.name} </Header>
                            </Segment>
                            <Segment vertical>
                                <Header as={"h1"}>Type: {employee.type}</Header>
                            </Segment>
            </Segment>
        )
    }
}


EmployeeWrapper.propTypes = {
    employee: PropTypes.object.isRequired
};


export default EmployeeWrapper;
