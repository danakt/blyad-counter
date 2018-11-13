export const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition

export const SpeechGrammarList = window.SpeechGrammarList || (window as any).webkitSpeechGrammarList

export const SpeechRecognitionEvent = window.SpeechRecognitionEvent || (window as any).webkitSpeechRecognitionEvent

/**
 * Creates the SpeechRecognition instance
 */
export const createSpeechRecognition = (): SpeechRecognition => {
  const recognition = new SpeechRecognition()
  const speechRecognitionList = new SpeechGrammarList()

  // const grammar = `#JSGF V1.0; grammar colors; public <color> = ${this.state.words.join(' | ')} ;`
  // speechRecognitionList.addFromString(grammar, 1)

  recognition.grammars = speechRecognitionList
  recognition.continuous = true
  recognition.lang = 'ru-RU'
  recognition.interimResults = true
  recognition.maxAlternatives = 1

  return recognition
}
