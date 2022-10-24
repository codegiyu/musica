import React, { useState } from "react";
import "../index.css";


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
}



const BoxPage = () => {
    let boxKeys = [1,2,3,4,5,6]
    let initialBoxState = boxKeys.reduce((acc,curr) => { return {...acc, [curr]: false} }, {})
    let [boxStates, setBoxStates] = useState(initialBoxState);
    let [boxSequence, setBoxSequence] = useState([]);
    let initialState = boxKeys.reduce((acc, key) => {return {...acc, [key]: {box: false, top: false, left: false, bottom: false, right: false}}}, {})
    let [active, setActive] = useState(initialState);
    let [errorMessage, setErrorMessage] = useState("")

    const handleBoxClick = (key) => {
        const allTrue = (obj) => Object.values(obj).every(item => item === true)

        const newSequence = () => [...new Set([...boxSequence, key])]; 
        const newBoxState = () => { return {...boxStates, [key]: true}};
        const newActive = (prop, idx) => {
            let obj = {...active}
            if (!idx) {
                obj[key][prop] = !obj[key][prop]
            } else {
                obj[idx][prop] = !obj[idx][prop]
            }
            
            return obj
        }

        const returnBoxStates = () => {
            console.log("yes")
            console.log(newBoxState(), newSequence())
            let returnBox = newBoxState(), returnSequence = newSequence()
            setTimeout(() => {
                returnBox = {...returnBox, [returnSequence[0]]: false}
                setBoxStates(returnBox);
                setActive(newActive("box", returnSequence[0]))
                setTimeout(() => { setActive(newActive("top", returnSequence[0])) }, 150);
                setTimeout(() => { setActive(newActive("right", returnSequence[0])) }, 300);
                setTimeout(() => { setActive(newActive("bottom", returnSequence[0])) }, 450);
                setTimeout(() => { setActive(newActive("left", returnSequence[0])) }, 600);
            }, 1000)
            setTimeout(() => {
                returnBox = {...returnBox, [returnSequence[1]]: false}
                setBoxStates(returnBox);
                setActive(newActive("box", returnSequence[1]))
                setTimeout(() => { setActive(newActive("top", returnSequence[1])) }, 150);
                setTimeout(() => { setActive(newActive("right", returnSequence[1])) }, 300);
                setTimeout(() => { setActive(newActive("bottom", returnSequence[1])) }, 450);
                setTimeout(() => { setActive(newActive("left", returnSequence[1])) }, 600);
            }, 3000)
            setTimeout(() => {
                returnBox = {...returnBox, [returnSequence[2]]: false}
                setBoxStates(returnBox);
                setActive(newActive("box", returnSequence[2]))
                setTimeout(() => { setActive(newActive("top", returnSequence[2])) }, 150);
                setTimeout(() => { setActive(newActive("right", returnSequence[2])) }, 300);
                setTimeout(() => { setActive(newActive("bottom", returnSequence[2])) }, 450);
                setTimeout(() => { setActive(newActive("left", returnSequence[2])) }, 600);
            }, 5000)
            setTimeout(() => {
                returnBox = {...returnBox, [returnSequence[3]]: false}
                setBoxStates(returnBox);
                setActive(newActive("box", returnSequence[3]))
                setTimeout(() => { setActive(newActive("top", returnSequence[3])) }, 150);
                setTimeout(() => { setActive(newActive("right", returnSequence[3])) }, 300);
                setTimeout(() => { setActive(newActive("bottom", returnSequence[3])) }, 450);
                setTimeout(() => { setActive(newActive("left", returnSequence[3])) }, 600);
            }, 7000)
            setTimeout(() => {
                returnBox = {...returnBox, [returnSequence[4]]: false}
                setBoxStates(returnBox);
                setActive(newActive("box", returnSequence[4]))
                setTimeout(() => { setActive(newActive("top", returnSequence[4])) }, 150);
                setTimeout(() => { setActive(newActive("right", returnSequence[4])) }, 300);
                setTimeout(() => { setActive(newActive("bottom", returnSequence[4])) }, 450);
                setTimeout(() => { setActive(newActive("left", returnSequence[4])) }, 600);
            }, 9000)
            setTimeout(() => {
                returnBox = {...returnBox, [returnSequence[5]]: false}
                setBoxStates(returnBox);
                setActive(newActive("box", returnSequence[5]))
                setTimeout(() => { setActive(newActive("top", returnSequence[5])) }, 150);
                setTimeout(() => { setActive(newActive("right", returnSequence[5])) }, 300);
                setTimeout(() => { setActive(newActive("bottom", returnSequence[5])) }, 450);
                setTimeout(() => { setActive(newActive("left", returnSequence[5])) }, 600);
            }, 11000)
            setBoxSequence([])
        }

        try{
            if (boxStates[key] && errorMessage === "") throw new Error(`Box ${key} has already been clicked!`)
            if (boxStates[key] && errorMessage.replace(/\d/, "") === "Box  has already been clicked!") throw new Error(`Click another box mafrend!`)
            if (boxStates[key] && errorMessage === "Click another box mafrend!") throw new Error(`You sure say you dey see road well at all?!`)
            if (boxStates[key] && errorMessage === "You sure say you dey see road well at all?!") throw new Error(`May God have marcy apan as`)
            if (boxStates[key] && errorMessage === "May God have marcy apan as") throw new Error(`Oya e don finish. Click another box😒`)
            if (boxStates[key] && errorMessage === "Oya e don finish. Click another box😒") throw new Error(`You like play too much ehn...smh🙄`)
            if (boxStates[key] && errorMessage === "You like play too much ehn...smh🙄") throw new Error(`Box ${key} has already been clicked!`)

            setActive(newActive("box"))
            setTimeout(() => { setActive(newActive("top")) }, 300);
            setTimeout(() => { setActive(newActive("right")) }, 300);
            setTimeout(() => { setActive(newActive("bottom")) }, 300);
            setTimeout(() => { setActive(newActive("left")) }, 300);

            setBoxStates(newBoxState())
            setBoxSequence(newSequence())
            
            if(allTrue(newBoxState())) returnBoxStates()
            setErrorMessage("")
        } catch(err) {
            console.log(err.message)
            setErrorMessage(err.message)
        } finally {
            console.log(`clicked: ${key}`)
        }
        
    }

    let boxProps = {handleBoxClick, active}

    return (
        <main className="bg-darkBackground px-4 md:px-20 lg:px-12 xl:px-16 w-full min-h-screen flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 w-full relative">
                <div className="absolute top-[-7rem] lg:top-[-4rem] left-0 w-full">
                    <p className="text-white text-sm md:text-base font-medium text-center">Click the boxes in any order to mark them and watch them unmark themselves in the order you marked them</p>
                </div>
                <div className="w-full">
                    <ErrorBoundary>
                        <Box key={1} props={{...boxProps, "key": 1}} />
                    </ErrorBoundary>
                </div>
                <div className="w-full">
                    <ErrorBoundary>
                        <Box key={2} props={{...boxProps, "key": 2}} />
                    </ErrorBoundary>
                </div>
                <div className="w-full">
                    <ErrorBoundary>
                        <Box key={3} props={{...boxProps, "key": 3}} />
                    </ErrorBoundary>
                </div>
                <div className="w-full">
                    <ErrorBoundary>
                        <Box key={4} props={{...boxProps, "key": 4}} />
                    </ErrorBoundary>
                </div>
                <div className="w-full">
                    <ErrorBoundary>
                        <Box key={5} props={{...boxProps, "key": 5}} />
                    </ErrorBoundary>
                </div>
                <div className="w-full">
                    <ErrorBoundary>
                        <Box key={6} props={{...boxProps, "key": 6}} />
                    </ErrorBoundary>
                </div>
                <div className=" absolute bottom-[-3rem] left-0 w-full">
                    <p className="text-red-500 text-base text-center font-bold">{errorMessage}</p>
                </div>
            </div>
        </main>
    )
}

export const Box = ({ props }) => {
    let {handleBoxClick, active, key} = props

    return (
        <div className="w-full relative aspect-square bg-transparent rounded-xl z-0" onClick={() => handleBoxClick(key) }>
            <div className={`w-box aspect-square ${active[key].box ? "bg-green-500" : "bg-white"} transition-colors duration-[1200ms] rounded-lg z-[5] ml-[3.5px] mt-[4.5px]`}></div>
            <div className={`absolute rounded-xl top-0 right-0 bg-transparent border-4 border-transparent ${active[key].bottom ? "w-full h-full border-b-green-500" : "w-0 h-0"} transition-[width] `}></div>
            <div className={`absolute rounded-xl bottom-0 left-0 bg-transparent border-4 border-transparent ${active[key].left ? "h-full w-full border-l-green-500" : "h-0 w-0"} transition-[height] `}></div>
            <div className={`absolute rounded-xl top-0 left-0 bg-transparent border-4 border-transparent ${active[key].top ? "w-full h-full border-t-green-500" : "w-0 h-0"} transition-[width] `}></div>
            <div className={`absolute rounded-xl top-0 left-0 bg-transparent border-4 border-transparent ${active[key].right ? "h-full w-full border-r-green-500" : "h-0 w-0"} transition-[height] `}></div>
        </div>
    )
}

export default BoxPage