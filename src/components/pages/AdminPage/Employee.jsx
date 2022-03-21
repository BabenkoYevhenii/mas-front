import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Container, Grid, Comment} from "semantic-ui-react";
import tripApi from "../../../api/trip";
import TripWrapper from "../../TripWrapper";

class Employee extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            trips: [],
        }
    }

    async componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const tripId = Number(query.get('tripId'));

        this.setState({trips});
    }

    render() {
        const {trips} = this.state;

        return (
            <Container text>
                {trips.length > 0
                && trips.map(trip => <TripWrapper trip={trip} key={`trip: ${trip.id}`}/>)}
            </Container>
        )
    }
}


HomePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};
const mapStateToProps = (state) => ({
    isAuth: !!state.auth.token,
    user: state.user
});

export default connect(mapStateToProps)(HomePage);
