import * as React from 'react'
import { createSpeechRecognition } from './libs/speechRecognition'
import { GlobalStyles } from './GlobalStyles'
import { SpeechRecognitionContainer } from './containers/SpeechRecognitionContainer'
import { BlyadsCounter } from './components/BlyadsCounter'
import { StartButton } from './components/StartButton'
import { BackgroundSpeech } from './components/BackgroundSpeech'
import { Center } from './components/Center'
import { Description } from './components/Description'

const matchingWords = [
  'блять',
  'блядь',
  'бля',
  'б****',
  'б**',
  'блядство',
  'блядства',
  'блядству',
  'блядские',
  'блядский',
  'блядское',
  'блядская',
  'б*******'
]

export const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <SpeechRecognitionContainer speechRecognition={createSpeechRecognition()}>
      {(recognitionResult, isStarted, start) =>
        isStarted ? (
          <>
            <BackgroundSpeech recognitionResult={recognitionResult} matchingWords={matchingWords} />
            <Center>
              <BlyadsCounter recognitionResult={recognitionResult} matchingWords={matchingWords} />
            </Center>
            {recognitionResult.length === 0 && (
              <Center>
                <Description>Скажите, блять, что-нибудь</Description>
              </Center>
            )}
          </>
        ) : (
          <Center>
            <StartButton onClick={() => start()}>Старт, блять</StartButton>
          </Center>
        )
      }
    </SpeechRecognitionContainer>
  </React.Fragment>
)
