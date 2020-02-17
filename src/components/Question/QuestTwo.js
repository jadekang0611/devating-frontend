import React from 'react';

function QuestTwo() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div>
      <form>
        <input
          type='image'
          src='https://user-images.githubusercontent.com/58707118/74623751-dbad0800-5113-11ea-81e9-462ee661a1c0.png'
          alt='submit'
        />
        <input
          type='image'
          src='https://user-images.githubusercontent.com/58707118/74623934-7f96b380-5114-11ea-84a9-0fe8daf9122b.png'
          alt='submit'
        />
        <button type='submit' onClick={handleSubmit}>
          => Next
        </button>
        <p>2 / 4</p>
      </form>
    </div>
  );
}

export default QuestTwo;