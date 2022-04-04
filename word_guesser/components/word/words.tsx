/**
 * 
 * Represent a single word
 * 
*/

import Word from "../word"

export default function Words({ words }) {

    return (


        words && words.map((word: string) => (
            <Word chars={word} key={word[0]} />
        ))

    )

}