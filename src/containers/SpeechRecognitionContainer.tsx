import * as React from 'react'

type Props = {
  speechRecognition: SpeechRecognition
  children: (
    recognitionResult: string[],
    isStarted: boolean,
    startRecognition: () => void,
    stopRecognition: () => void
  ) => React.ReactNode
}

export const SpeechRecognitionContainer = (props: Props) => {
  // State
  const [recognitionResult, setRecognitionResult] = React.useState([] as string[])
  const [isStarted, setStartedFlag] = React.useState(false)

  React.useEffect(() => {
    props.speechRecognition.addEventListener('result', event => {
      // const currentIndex = event.results.length - 1
      // const isFinal = event.results[currentIndex].isFinal
      const resultList = Array.from(event.results).map(item => item[0].transcript)

      setRecognitionResult(resultList)
    })

    props.speechRecognition.addEventListener('speechend', () => {
      if (props.speechRecognition) {
        props.speechRecognition.stop()
      }

      console.log('Stopped')
      setStartedFlag(false)
      setRecognitionResult([])
    })

    props.speechRecognition.addEventListener('error', event => {
      setStartedFlag(false)
      setRecognitionResult([])
      console.error('Error occurred in recognition: ' + event.error)
    })
  }, [])

  return (
    <>
      {props.children(
        recognitionResult,
        isStarted,

        // Start recognition
        () => {
          if (props.speechRecognition) {
            props.speechRecognition.start()
            setStartedFlag(true)
          }
        },
        // Stop recognition
        () => {
          if (props.speechRecognition) {
            props.speechRecognition.stop()
            setStartedFlag(false)
          }
        }
      )}
    </>
  )
}
