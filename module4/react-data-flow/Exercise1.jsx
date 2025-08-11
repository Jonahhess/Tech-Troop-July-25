import { useState } from 'react';

export default function Exercise1() {
  const data = {
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*',
      'https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*',
      'https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*'
    ],
    currentImg: 0
  };

  const [state, setState] = useState(data);

  function shiftImageBack() {
    setState({
      ...state,
      currentImg:
        (state.currentImg - 1 + state.images.length) % state.images.length
    });
  }

  function shiftImageForward() {
    setState({
      ...state,
      currentImg: (state.currentImg + 1) % state.images.length
    });
  }

  return (
    <>
      <img src={state.images[state.currentImg % state.images.length]}></img>
      <button onClick={shiftImageBack}>Move Back</button>
      <button onClick={shiftImageForward}>Move Forward</button>
    </>
  );
}
