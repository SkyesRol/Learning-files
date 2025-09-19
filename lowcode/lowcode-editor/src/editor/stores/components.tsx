// 编辑区域的数据由store 管理
import {create} from 'zustand'


// parentId + children 可以构建组件树
export interface Component{
  id:number;
  name:string;
  children?:Component[];
  parentId?:number;
  props: Record<string, unknown>;
  desc?:string;
}

interface State {
  components:Component[];
}
// store 主要提供 State 和 Actions

interface Actions {
  addComponent: (component:Component,parentId?:number) => void;
  deleteComponent:( componentId:number)=>void
  updateComponent:()=>void
  updateComponentProps:(componentId:number,props: Record<string, unknown>)=>void
  
}

//  State & Actions 交叉运算 合并 要求都有  | 是 二选一有一个即可
export const useComponentsStore = create<State & Actions>(
  (
    (set,get) =>(
      {
        components:[
          {
            id:1,
            name:'Page',
            props:{},
            desc:'页面',
            children:[],
          }
        ],
        addComponent:(component,parentId)=>set((state)=>{
          const newComponent: Component = { ...component };
          if (parentId) {
            const parentComponent = getComponentById(
              parentId,
              state.components
            );
            if (parentComponent) {
              newComponent.parentId = parentId;
              if (parentComponent.children) {
                parentComponent.children = [
                  ...parentComponent.children,
                  newComponent,
                ];
              } else {
                parentComponent.children = [newComponent];
              }
              // 只更新现有树（不要把子节点重复加入根级）
              return {
                components: [...state.components],
              };
            }
          }
          // 无 parentId 或未找到父节点时，作为根级节点添加
          return {
            components: [...state.components, newComponent],
          };
        }),
        deleteComponent:(componentId:number)=>{
          if(!componentId) return;
          const component = getComponentById(componentId,get().components);
          if(component?.parentId){
            const parentComponent = getComponentById(component.parentId,get().components);
            if(parentComponent){
              parentComponent.children = parentComponent.children?.filter((c)=>c.id !== componentId);
              set({
                components:[...get().components]
              })
            }
          }
        },
        updateComponent:()=>{},
        updateComponentProps:()=>{}
      }
    )
  )
)

export function getComponentById(
  id:number,
  components:Component[]
):Component|null{
  if(!id) return null;
  for(const component of components){
    if(component.id === id){
      return component;
    }
    if(component.children&&component.children.length>0){
      const result = getComponentById(id,component.children);
      if(result){
        return result;
      }
    }
  }
   return null
}