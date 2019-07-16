import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  PageContainer, Form, FormSlider, FormSliderMeasure,
  FormLabel, FormCheckBox, FormField, FormInput,
} from '~/components/common/styles';
import BottomMenu from '~/components/BottomMenu';


class Search extends Component {
  state = {
    useGPSLocation: true,
    kilometers: 5,
    address: '',
  }

  render() {
    const { kilometers, useGPSLocation, address } = this.state;
    return (
      <PageContainer>
        <Form>
          <FormField>
            <FormCheckBox
              title="Usar minha localização atual"
              checked={useGPSLocation}
              onPress={() => this.setState({ useGPSLocation: !useGPSLocation })}
            />
            { !useGPSLocation
            && (
              <FormInput
                placeholder="Endereço"
                value={address}
                onChangeText={value => this.setState({ address: value })}
                rightIcon={{
                  type: 'material', name: 'location-on', size: 15, color: '#fff',
                }}
              />
            )
          }
          </FormField>


          <FormField>
            <FormLabel>Raio de busca</FormLabel>
            <FormSlider
              value={kilometers}
              maximumValue={50}
              minimumValue={1}
              step={1}
              onValueChange={km => this.setState({ kilometers: km })}
            />
            <FormSliderMeasure>{kilometers} km</FormSliderMeasure>
          </FormField>
        </Form>
        <BottomMenu />
      </PageContainer>
    );
  }
}


export default connect()(Search);
