// 编辑区域的数据由store管理
import { create } from 'zustand'

// parentId + children 可以构建出一个树状结构
export interface Component {
    id: number;
    name: string;
    children?: Component[];
    parentId?: number;
    props: any;
    desc: string;
}


interface State {
    components: Component[];
}
// store 主要提供 state 和 action

interface Action {
    addComponent: (component: Component, parentId?: number) => void;
    deleteComponent: (componentId: number) => void;
    updateComponentProps: (componentId: number, props: any) => void;
}
// 交叉类型
export const useComponentsStore = create<State & Action>(

    (set, get) => ({
        components: [
            // {
            //     id: 1,
            //     name: 'Page',
            //     props: {},
            //     desc: '页面'
            // }
        ],
        addComponent: (component, parentId) => set((state) => {
            if (parentId) {
                const parentComponent = getComponentById(parentId, state.components);
                if (parentComponent) {
                    if (parentComponent.children) {
                        parentComponent.children.push(component);
                    } else {
                        parentComponent.children = [component];
                    }
                }
                component.parentId = parentId;
                return {
                    components: [...state.components, component]
                }
            }
            return {
                components: [...state.components, component]
            }
        }),
        deleteComponent: (componentId) => {
            if (!componentId) return;
            const component = getComponentById(componentId, get().components);
            if (!component) return;
            
            // 收集需要删除的所有组件ID（包括子组件）
            const idsToDelete = new Set<number>();
            
            // 递归收集组件及其子组件的ID
            const collectComponentIds = (comp: Component) => {
                idsToDelete.add(comp.id);
                if (comp.children && comp.children.length > 0) {
                    comp.children.forEach(child => collectComponentIds(child));
                }
            };
            
            collectComponentIds(component);
            
            // 从父组件的children中删除
            if (component.parentId) {
                const parentComponent = getComponentById(component.parentId, get().components);
                if (parentComponent) {
                    parentComponent.children = parentComponent.children?.filter((item) => item.id !== componentId);
                }
            }
            
            // 从components数组中删除所有收集到的组件ID
            set({
                components: get().components.filter(comp => !idsToDelete.has(comp.id))
            });
        },
        updateComponentProps: () => { }
    })
)


export function getComponentById(
    componentId: number | null,
    components: Component[]

): Component | null {
    if (!componentId) {
        return null;
    };
    for (const component of components) {
        if (component.id === componentId) {
            return component;
        }
        if (component.children && component.children.length) {
            const childComponent = getComponentById(componentId, component.children);
            if (childComponent) {
                return childComponent;
            }
        }
    }
    return null;
}




