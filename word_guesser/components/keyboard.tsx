
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: typeof Keyboard;
}

const KeyboardWrapper = ({ }: any,) => {

  // Keyboard layout can set character constraints
  const layout = {
    layout: {
      'default': [
        'q w e r t y u i o p',
        'a s d f g h j k l',
        'z x c v b n m'
      ],
    }
  }

  const onKeyPress = (button: string) => {
    console.log(button);
  }


  return (
    //  Keyboard css and html coming here
    <>
      <div className="flex p-2 m-auto max-w-md items-center">
        <div className="flex flex-1">
          <Keyboard
            onKeyPress={onKeyPress}
            layout={layout.layout}
            physicalKeyboardHighlight={true}
            physicalKeyboardHighlightTextColor={'white'}
            physicalKeyboardHighlightBgColor={"red"}
            onInit={(keyboard) => console.log("simple-keyboard initialized", keyboard)}
          />
        </div>

      </div>
    </>
  );
};

export default KeyboardWrapper;
