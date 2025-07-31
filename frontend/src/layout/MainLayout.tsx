   import { ResizableHandle, ResizablePanel, ResizablePanelGroup,} from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"
import LeftSlider from "./components/LeftSlider"
import RightSlider from "./components/RightSlider"

const MainLayout = () => {
  return (


 <div className="h-screen w-screen"> 
    <ResizablePanelGroup
      direction="horizontal"
      className="flex-1 flex h-full "
    >
      <ResizablePanel defaultSize={30}  minSize={20}>
        <LeftSlider/>
      </ResizablePanel>


      <ResizableHandle />

      
       
          <ResizablePanel defaultSize={50}  minSize={20}>
            <Outlet />
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={25} minSize={5}>
            <RightSlider/>
          </ResizablePanel>

       

      
    </ResizablePanelGroup>
  </div>
  )
}


export default MainLayout