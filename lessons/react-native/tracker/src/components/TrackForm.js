import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
    const { state: { name, recording },
    startRecording,
    stopRecording,
    changeName } = useContext(LocationContext);

    return (
        <>
            <Spacer>
                <Input
                    placeholder="Enter Track's name"
                    autoCorrect={false}
                    autoCapitalize="sentences"
                    onChangeText={changeName}
                    value={name}
                />
            </Spacer>

            { recording 
            ? <Button title="Stop" onPress={stopRecording} /> 
            : <Button title="Start recording" onPress={startRecording} />
            }
        </>
    )
}

export default TrackForm;