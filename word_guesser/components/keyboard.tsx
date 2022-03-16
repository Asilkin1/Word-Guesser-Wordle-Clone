import { MutableRefObject } from "react";
import styles from "../styles/Home.module.css";
import Keyboard  from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<Keyboard>;
}

const KeyboardWrapper = ({ allowedChars }: any, ) => {
  // set char constraints
  const setAllowedChars = () => {
    return true;
  };

  const onKeyPress = (button: string) => {
    console.log(button);
  }

  return (
    //  Keyboard css and html coming here
    <>
    <Keyboard onKeyPress={onKeyPress}/>
    </>
  );
};

export default KeyboardWrapper;
