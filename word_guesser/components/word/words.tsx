// Holds words in the DECK

import Word from "../word"

export default function Words({ wordsFromBackend }) {

    // Stub for testing
    const wordsExample = [
        ' ello',
        ' ella',
        ' ellu',
        ' ellz',
        ' ell '
    ]

    console.log('Words Example', wordsExample);
    return (

        wordsExample.map((word) => (
            <Word chars={word} key={word.length} />
        ))

    )

}