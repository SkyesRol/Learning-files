import {
    useEffect,
    useRef,
} from 'react';




function useUpdateEffect(effect: React.EffectCallback, deps: React.DependencyList) {

    const isFirst = useRef(true);
    useEffect(() => {
        if (isFirst.current === true) {
            isFirst.current = false;
            return;
        }
        return effect();
    }, [deps])




}

export default useUpdateEffect;








