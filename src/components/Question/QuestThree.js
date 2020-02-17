import React from 'react';

function QuestThree() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div>
      <h3>Some of your favorite activities</h3>
      <form>
        <input
          type='image'
            src='https://user-images.githubusercontent.com/58707118/74624172-735f2600-5115-11ea-9819-8bf512bbbf1e.png'
          alt='submit'
        />
        <input
          type='image'
          src='https://user-images.githubusercontent.com/58707118/74624173-73f7bc80-5115-11ea-8b3b-54fd87d84fd7.png'
          alt='submit'
        />
        <input
          type='image'
          src='https://user-images.githubusercontent.com/58707118/74624174-73f7bc80-5115-11ea-90b9-8f723e1599e3.png'
          alt='submit'
        />
        <input
          type='image'
          src='https://user-images.githubusercontent.com/58707118/74624175-73f7bc80-5115-11ea-9a53-f21404677e70.png'
          alt='submit'
        />
        <input
          type='image'
          src='https://user-images.githubusercontent.com/58707118/74624176-73f7bc80-5115-11ea-8f4c-f228ff3e71d5.png'
          alt='submit'
        />
        <button type='submit' onClick={handleSubmit}>
          => Next
        </button>
        <p>3 / 4</p>
      </form>
    </div>
  );
}

export default QuestThree;