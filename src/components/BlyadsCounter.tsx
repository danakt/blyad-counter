import * as React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import * as memoize from 'fast-memoize'
import * as classNames from 'classnames'

export const CounterHolder = styled.h1`
  font-size: 5vw;
  font-weight: bold;
  font-style: italic;
  color: #4affff;
  transition: 0.2s ease-out transform;
  transform-origin: 50%;

  &.bump {
    transform: scale(2);
    transform-origin: 50%;
    transition: 0.1s ease-out transform;
  }
`

/**
 * Return count matches in string
 */
const countMatchesInPhrase = memoize(
  (matchingWords: string[], phrase: string) => phrase.split(' ').filter(word => matchingWords.includes(word)).length
)

/**
 * Returns number of matching in result of speech recognition
 * @param recognitionResult List of phrases obtained from speech recognition
 * @param matchingWords Words to find
 */
const countMatches = (recognitionResult: string[], matchingWords: string[]): number =>
  R.pipe(
    R.map<string, number>(phrase => countMatchesInPhrase(matchingWords, phrase)),
    R.sum
  )(recognitionResult)

/**
 * Type of component properties
 */
type Props = {
  recognitionResult: string[]
  matchingWords: string[]
}

let bumpTimeout = -1

export const BlyadsCounter = (props: Props) => {
  const [isBumped, bump] = React.useState(false)

  const blyads = countMatches(props.recognitionResult, props.matchingWords)
  const [blyadsCount, updateBlyads] = React.useState(blyads)

  React.useEffect(
    () => {
      updateBlyads(blyads)

      if (blyads > blyadsCount) {
        bump(true)

        window.clearTimeout(bumpTimeout)
        bumpTimeout = window.setTimeout(() => {
          bump(false)
        }, 100)
      }
    },
    [blyadsCount !== blyads]
  )

  return <CounterHolder className={classNames({ bump: isBumped })}>{blyads}</CounterHolder>
}
