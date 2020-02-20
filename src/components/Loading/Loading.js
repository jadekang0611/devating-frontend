// import React from 'react';
// import './loading.css';
// import { Redirect } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// function Loading(props) {
//   const [redirect, setRedirect] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setRedirect(true);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div className="loading">
//       {redirect && <Redirect to="/results" />}
//       {!redirect && (
//         <div>
//           <h2>Refactoring your matches</h2>
//           <img
//             className="loadingIcon"
//             src="https://user-images.githubusercontent.com/58707118/74624812-f2555e00-5117-11ea-9825-7ca3a6623c88.png"
//             alt="refactoring"
//           ></img>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Loading;
