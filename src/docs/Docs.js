import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) })
    })
  }

  render() {
    const { route } = this.state;
    const component = route ? componentData.filter(component => component.name === route)[0] : componentData[0];

    return (
      <Fragment>
        <Grid container direction="row" wrap="nowrap">
          <Grid item lg={2}>
            <Box component="div">
              <Navigation components={componentData.map(component => component.name)} />
            </Box>
          </Grid>
          <Grid item lg={10}>

            <Box component="div">
              <h3 className='title'>ZK Minerva-IOT IM react Framework components</h3>
              <ComponentPage component={component} />
            </Box>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}