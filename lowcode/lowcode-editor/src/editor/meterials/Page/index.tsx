import type { PropsWithChildren } from "react";
import type { CommonComponentProps } from '../../interface'
import { useDrop } from 'react-dnd'
import { useComponentsStore } from '../../stores/components'
import {
  useComponentConfigStore
} from '../../stores/component-config'
import { useMaterialDrop } from '../../hooks/useMaterialDrop'

interface PageProps extends PropsWithChildren {
  id: number;
  name: string;
}

function Page({ id, name, children }: PageProps) {
  const { addComponent } = useComponentsStore()
  const { componentConfig } = useComponentConfigStore()
  const { canDrop, drop } = useMaterialDrop(['Button', 'Container', 'Page'], id)
  return (
    <div
      ref={drop}
      className="p-[20px] h-full box-border"
      style={{ backgroundColor: canDrop ? 'lightgreen' : 'white' }}
    >
      <div>
        {name} {id}
      </div>
      {children}
    </div>
  )
}

export default Page;