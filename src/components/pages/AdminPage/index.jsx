import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Container, Grid, Header, Segment} from "semantic-ui-react";
import tripApi from "../../../api/trip";
import employeeApi from "../../../api/employee";
import TripWrapper from "../../TripWrapper";
import EmployeeWrapper from "../../EmployeeWrapper";

class AdminPage extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            employees: [],
            trip: null,
            employee: null,
        }
    }

    async componentDidMount() {
        const [trips] = await Promise.all([tripApi.getAllTrips()]);
        this.setState({trips});
    }

    handleTripClick = (trip) => {
        this.setState({trip, employee: null})

    };



    render() {
        const {trips, employees, trip, employee} = this.state;

        return (
            <Container>

                <Grid columns={2}>
                    <Grid.Column>
                        <Segment>
                        <Header>Trips</Header>
                        {trips.map(trip => <Segment onClick={() => this.handleTripClick(trip)}>{trip.name}</Segment>)}
                        </Segment>
                    </Grid.Column>


                </Grid>
                {trip && <Segment><TripWrapper trip={trip}/>{trip.employees.map(employee => <EmployeeWrapper employee={employee}/>)}</Segment>}
            </Container>
        )
    }
}


AdminPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};
const mapStateToProps = (state) => ({
    isAuth: !!state.auth.token,
    user: state.user
});

export default connect(mapStateToProps)(AdminPage);
