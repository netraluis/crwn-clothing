import React from "react";

import Spinner from "../spinner/spinner.component";

// const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
//   return isLoading ? (
//     <SpinnerOverlay>
//       <SpinnerContainer />
//     </SpinnerOverlay>
//   ) : (
//     <WrappedComponent {...otherProps} />
//   );
// };

const WithSpinner = (WrappedComponent) =>  ({ isLoading, ...otherProps }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default WithSpinner;
