/**
 * 
 * Represent a single word
 * 
*/

import Word from "../word"

export default function Words({ words }) {

    return (

        words && words.map((word: string, index) => (
            <Word chars={word} key={index} />
        ))

    )

}