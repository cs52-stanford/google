import React from 'react';

import Map               from './Map.js'
import InlineDatePicker  from './Inputs/InlineDatePicker.js'
import LocationSearchBar from './Inputs/LocationSearchBar.js'
import FilterRadios      from './Inputs/FilterRadios.js'
import InlineDropdown    from './Inputs/InlineDropdown.js'

import Container    from 'react-bootstrap/Container';
import Row          from 'react-bootstrap/Row';
import Col          from 'react-bootstrap/Col';
import Form         from 'react-bootstrap/Form';
import Button       from 'react-bootstrap/Button';
import InputGroup   from 'react-bootstrap/InputGroup';
import firebase     from '../firebase.js';

const FREQUENCIES = [
  'Every day',
  'Every week',
  'Every month'
]

class NewCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLocation: {
        lat: 48.611639, // Ukraine
        lng: 29.178028  // Ukraine
      },
      mapFilter: 'Satellite',
      mapStartDate: new Date(),
      mapEndDate: new Date(),
      mapFrequency: 'Every day',
    }
  }

  handleLocationChange(location) {
    this.setState({
      mapLocation: location
    });
  }

  handleFilterChange(filter) {
    console.log(`filter = ${filter}`);
    this.setState({
      mapFilter: filter
    });
  }

  handleStartDateChange(date) {
    console.log(`start date = ${date}`);
    this.setState({
      mapStartDate: date
    });
  }

  handleEndDateChange(date) {
    console.log(`end date = ${date}`);
    this.setState({
      mapEndDate: date
    });
  }

  handleFrequencyChange(freq) {
    console.log(`freq = ${freq}`);
    this.setState({
      mapFrequency: freq
    })
  }

  handleSave(e) {
    e.preventDefault();
    console.log("SAVING");

    const analysisDB = firebase.database().ref('analyses');
    const analysis = {
      mapLocation: this.state.mapLocation,
      mapFilter: this.state.mapFilter,
      mapStartDate: this.state.mapStartDate,
      mapEndDate: this.state.mapEndDate,
      mapFrequency: this.state.mapFrequency,
    };
    console.log(analysis);
    analysisDB.push(analysis);
  }

  render() {
    return(
      <div id="new-analysis-popup">
      <nav>
        <div id="logo">
          <img src="https://www.lawctopus.com/wp-content/uploads/2017/12/Accountability-Counsel-Logo-1024x261.jpg" />
        </div>
        <ul>
          <li>
            <a href="#" class="active">
              Past Cases
            </a>
          </li>
          <li>
            <a href="#">Current Cases</a>
          </li>
          <li>
            <a href="#">New Case</a>
          </li>
        </ul>
      </nav>
        <Container>
          <Row>
            <h1>Enter New Case</h1>
          </Row>
          <Row>
            <Col sm={4}>
            <Form>
            <Form.Row>
              <Col sm={4}>
                <Form.Label>Case Title:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control placeholder="Case Title" />
              </Col>
              </Form.Row>
              </Form>
              <Form onSubmit={this.handleSave.bind(this)}>

              <InlineDatePicker
                  leftCol={4}
                  rightCol={8}
                  initialDate={this.state.mapEndDate}
                  label="Start Date"
                  onChange={this.handleEndDateChange.bind(this)}
                />

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Case Description</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group>
                  <LocationSearchBar
                    location={this.state.mapLocation}
                    onChange={this.handleLocationChange.bind(this)}
                  />
                </Form.Group>

                <Form.Group>
                  <FilterRadios
                    initialFilter={this.state.mapFilter}
                    onChange={this.handleFilterChange.bind(this)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Case
                </Button>

              </Form>
            </Col>
            <Col sm={8}>
              <Map
                location={this.state.mapLocation}
                filter={this.state.mapFilter}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewCase;
