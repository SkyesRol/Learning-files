import { Allotment } from "allotment"
import "allotment/dist/style.css"
import { Header } from "@/editor/components/Header"
import { Material } from "@/editor/components/Material"
import { EditArea as EditorArea } from "@/editor/components/EditorArea"
import { Setting } from "@/editor/components/Setting"

export default function Editor() {
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="h-[60px] flex items-center border-b-[1px] border-[#000]"><Header /></div>
      <Allotment>
        <Allotment.Pane preferredSize={280} maxSize={300} minSize={200}>
          <Material />
        </Allotment.Pane>
        <Allotment.Pane>
          <EditorArea />
        </Allotment.Pane>
        <Allotment.Pane preferredSize={280} maxSize={300} minSize={200}>
          <Setting />
        </Allotment.Pane>
      </Allotment>

    </div>
  )
}