import Footerbar from "./components/Footerbar"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Stepbar from "./components/Stepbar"

function App() {

  return (
    <div className="bg-Lightgray font-ubuntu w-full h-[80vh] lg:h-[100vh] lg:flex lg:justify-center lg:items-center ">
      <div className="w-full lg:max-w-4xl lg:flex justify-center h-full lg:h-auto lg:justify-between lg:p-4 items-center lg:bg-white lg:w-[60%] lg:rounded-lg">

        <Stepbar />
        <div className="step-container relative flex flex-col items-center  bg-Lightgray p-4 h-full lg:h-[500px] lg:bg-white lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center">

          <Step3 />

          <Footerbar />
        </div>
      </div>
    </div>

  )
}

export default App
