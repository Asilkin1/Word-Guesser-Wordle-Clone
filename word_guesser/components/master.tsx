import Keyboard from '../components/keyboard'
import Deck from './deck';

export default function Master() {




    return (
        <>
            <div className="flex flex-1 flex-col">
                <Deck />
                <div >
                    <Keyboard />
                </div>

            </div>
        </>

    )
}