// Holds words in the DECK

import Word from "../word"

export default function Words({ words }) {


    return (

        words && words['word'].map((word) => (
            <Word chars={word} key={word[0]} />
        ))

    )

}