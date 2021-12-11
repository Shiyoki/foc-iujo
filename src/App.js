import About from "./components/about";
import Bio from "./components/bio";
import Exp from "./components/exp";
import Hobby from "./components/hobby";
import Interest from "./components/interest";
import Tech from "./components/tech";

export default function Routes(){
    return(
      <div className="grid grid-rows-6">
        <div>
          <About />
        </div>
        <div>
          <Bio/>
        </div>
        <div>
          <Exp />
        </div>
        <div>
          <Interest />
        </div>
        <div>
          <Tech />
        </div>
        <div>
          <Hobby />
        </div>
      </div>
      
    )
}