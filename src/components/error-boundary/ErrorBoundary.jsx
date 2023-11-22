// import { useEffect, useState } from "react"

// function ErrorBoundary({children}){

//   const [hasError, setHasError] = useState(false);

//   useEffect(()=>{

//     const catchComponentError = ({message,error})=>{
//       console.log('args--->', message)
//       setHasError(true);
//     }

//     window.addEventListener('error', catchComponentError)

//     return ()=>{
//       window.removeEventListener('error', catchComponentError)
//     }
//   },[])

//   if(hasError=== true){
//     return <>Error is Found</>

//   }

//   return children

// }

// export default ErrorBoundary
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("error--->", error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
