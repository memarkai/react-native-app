import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import {
  PageContainer, Form, FormSlider, FormSliderMeasure,
  FormLabel,
} from '~/components/common/styles';
import BottomMenu from '~/components/BottomMenu';


class Search extends Component {
  state = {
    kilometers: 5,
  }

  render() {
    const { kilometers } = this.state;
    return (
      <PageContainer>
        <Form>
          <FormLabel>Raio de busca</FormLabel>
          <FormSlider
            value={kilometers}
            maximumValue={50}
            minimumValue={1}
            step={1}
            onValueChange={km => this.setState({ kilometers: km })}
          />
          <FormSliderMeasure>{kilometers} km</FormSliderMeasure>
        </Form>
        <BottomMenu />
      </PageContainer>
    );
  }
}


export default connect()(Search);
