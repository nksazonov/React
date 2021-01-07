import '../_mockLocation'

import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigationFocus } from 'react-navigation'

import { Context as LocationContext } from '../context/LocationContext'
import Map from '../components/Map'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation); 

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>
                Create a Track
            </Text>

            <Map />

            { err
              ? <Text>Please enable location services</Text>
              : null}
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen);