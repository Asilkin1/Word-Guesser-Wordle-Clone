import Keyboard from '../components/keyboard'
import Deck from './deck';
import Backend from './backend/backend';
import path from 'path';



export async function getStaticProps() {
    const res = await fetch('../components/backend/words.txt')
    const json = await res.json()

    console.log('data from file', json);

    return {
        props: {
            data: json,
        },
    }
}

export default function Master() {

    const time = 20;

    return (
        <>

            <div className="flex flex-1  items-center p-4  gap-5"
            >
                <div className="flex   bg-red-100 p-2 rounded-xl border-2 border-red-200 text-xl font-bold">Time: 20 s</div>
                <div className="flex flex-1 bg-green-100 text-center p-2 rounded-xl border-2 border-green-200 text-xl font-bold">Chars: a,b,c,d,e,f,g</div>
                <div className="flex  bg-yellow-100 p-2 rounded-xl border-2 border-yellow-200 text-xl font-bold">Score:</div>
            </div>

            <Deck />

            <Keyboard />

        </>

    )
}