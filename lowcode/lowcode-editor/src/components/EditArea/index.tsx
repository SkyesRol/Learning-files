import {
    useEffect
} from 'react'
import { useComponentsStore } from '@/stores/components'
export function EditArea() {
    const { components, addComponent, deleteComponent } = useComponentsStore();
    useEffect(() => {
        addComponent({
            id: 2,
            name: 'Container',
            props: {
                width: 100,
                height: 100,
            },
            desc: '容器',
            parentId: 1
        });
        addComponent({
            id: 333,
            name: 'Video',
            props: [],
            desc: '视频',
            parentId: 2
        }, 2)
        addComponent({
            id: 334,
            name: 'Video',
            props: [],
            desc: '视频',
            parentId: 333
        }, 333)
        setTimeout(() => {
            deleteComponent(333)
        }, 2000)
    }, [])


    return (
        <div className='h-[100%] bg-[#f0f0f0]'>
            <pre>
                {JSON.stringify(components, null, 2)}
            </pre>
            EditArea
        </div>
    )
}