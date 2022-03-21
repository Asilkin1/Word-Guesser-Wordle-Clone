// Holds words in the DECK

import Word from "../word"

export default function Words() {

    const wordsExample = [
        'hello',
        'hella',
        'hellu',
        'hellz',
        'hellb'
    ]


    console.log('Words Example', wordsExample);
    return (

        wordsExample.map((word) => (
            <Word chars={word} key={word.length} />
        ))

    )

}