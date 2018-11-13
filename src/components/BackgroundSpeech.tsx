import * as React from 'react'
import styled from 'styled-components'

export const BackgroundSpeechBlock = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 30px;
  color: #777;

  b {
    color: #fff;
  }
`

/**
 * Highlights matching words
 * @param phrases Phrases to find words
 * @param matchingWords Words to match
 * @returns List of words with highlighted
 */
const makeMatchedWordsBold = (phrases: string[], matchingWords: string[]): (string | JSX.Element)[] =>
  phrases.reduce(
    (acc, phrase, i) =>
      acc.concat(
        phrase
          .split(' ')
          .map((word, k) =>
            matchingWords.includes(word.toLocaleLowerCase()) ? <b key={`${i}-${k}`}>{word} </b> : word + ' '
          )
      ),
    [] as (string | JSX.Element)[]
  )

type Props = {
  recognitionResult: string[]
  matchingWords: string[]
}

export const BackgroundSpeech = (props: Props) => (
  <BackgroundSpeechBlock>{makeMatchedWordsBold(props.recognitionResult, props.matchingWords)}</BackgroundSpeechBlock>
)
