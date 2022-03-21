import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button, Container, Grid, Header, Segment, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

class TripWrapper extends Component {
    static propTypes = {};

    render() {
        const {trip} = this.props;

        return (
            <Segment raised>
                <Grid>
                    <Grid.Column width={13}>
                        <Segment>
                            <Segment vertical>
                                <Header as={"h1"}>Name: {trip.name} </Header>
                            </Segment>
                            <Segment vertical>
                                <Header as={"h1"}>Date: {trip.dateTime}</Header>
                            </Segment>

                            <Table padded='very' basic='very' celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Stop name</Table.HeaderCell>
                                        <Table.HeaderCell>City</Table.HeaderCell>
                                        <Table.HeaderCell>Street</Table.HeaderCell>
                                        <Table.HeaderCell>Building</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {trip.stops.map(stop => <Table.Row
                                        key={`trip: ${trip.id} ticket: ${stop.id}`}>
                                        <Table.Cell>{stop.name}</Table.Cell>
                                        <Table.Cell>{stop.city}</Table.Cell>
                                        <Table.Cell>{stop.street}</Table.Cell>
                                        <Table.Cell>{stop.buildingNumber}</Table.Cell>
                                    </Table.Row>)}
                                </Table.Body>
                            </Table>
                        </Segment>

                    </Grid.Column>

                    <Grid.Column width={3} textAlign="center" verticalAlign="middle">
                        <Button.Group basic vertical>
                            <Link to={`/order/add?tripId=${trip.id}`}>
                                <Button content={"Order"}/>
                            </Link>
                        </Button.Group>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}


TripWrapper.propTypes = {
    trip: PropTypes.object.isRequired
};


export default TripWrapper;
