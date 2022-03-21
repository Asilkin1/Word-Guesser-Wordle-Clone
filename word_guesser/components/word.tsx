import { fromPairs } from "lodash";
import { format } from "path/posix";
import { createRef, useEffect, useRef } from "react";


const elemRefs: any[] = [];

// Autotab
const autoTab = (e: any) => {
  const BACKSPACE_KEY = 8;
  const DELETE_KEY = 46;
  let tabindex = e.target.getAttribute('dataIndex');
  tabindex = Number(tabindex);
  let elem = null;
  if (e.keyCode === BACKSPACE_KEY) {
    elem = tabindex > 0 && elemRefs[tabindex - 1];

  } else if (e.keyCode !== DELETE_KEY) {
    elem = tabindex < elemRefs.length - 1 && elemRefs[tabindex + 1];
    console.log('tabindex', tabindex, ' element ', elem);
  }
  if (elem) {
    elem.current.focus();
  }
};

const Char = (props: any) => {
  const ref = createRef();
  elemRefs.push(ref);
  return (
    <input
      className="p-2 m-2 w-12 h-12 border border-indigo-600 justify-center rounded-md"
      // dataIndex={props.index}
      // ref={ref}
      maxLength={1}
      value={props.startingChar[0]}
    // onKeyUp={props.autoTab}
    />
  );
};


const Word = ({ length, startingChar }: any) => {
  // Create an array of a specified length
  let word = Array(length).join(".").split(".");



  useEffect(() => {
    // Replace N number of starting chars
    for (let i = 0; i < startingChar.length; i++) {
      word[i] = startingChar[i];
    }
  })

  const handleKeyPress = (e: any) => {

    let key = e.keyCode ? e.keyCode : e.which;
    console.log('Key pressed ', key);
    const form = e.target.form;


    // Enter key pressed
    if (key === 13) {
      const index = [...form].indexOf(e.target);
      form.elements[index].focus();
      console.log('Current index: ', index);
      console.log(e.key);
      // e.preventDefault();
      console.log('Enter pressed');
    }
    // Backspace action to go to previous field
    if (key === 8) {
      const index = [...form].indexOf(e.target);
      form.elements[index].focus();
      console.log(e.key);
      // e.preventDefault();
      console.log('Backspace pressed');
    }

  }

  return (
    <>
      {/* Use form to get an index of the next input field */}
      <form>
        {
          word.map((m) => (
            <input
              key={m.length - 1}
              className="p-2 m-2 w-12 h-12 border border-indigo-600 justify-center rounded-md"
              // dataIndex={props.index}
              // ref={ref}
              maxLength={1}
              onKeyDown={handleKeyPress}
            />
          ))
        }
      </form>
    </>

  )
}

export default Word;
