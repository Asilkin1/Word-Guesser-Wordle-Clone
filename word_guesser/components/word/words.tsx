// Holds words in the DECK

import Word from "../word"

import { useEffect, useState } from "react"

export default function Words() {

    // Words fetched from API saved in here
    const [words, setWords] = useState(null);;

    // Load words once on initial page request
    useEffect(() => {
        // Fetch words from API
        fetch('api/words')
            .then((res) => res.json())
            .then((data) => {
                // save words in the component's state
                setWords(data);
            })
    }, [])

    return (

        words && words['word'].map((word) => (
            <Word chars={word} key={word[0]} />
        ))

    )

}