import useSearchStore from '@/store/useSearchStore'
import SearchBox from '../../components/SearchBox'
import styles from './Search.module.css'
import { useEffect, useState, memo } from 'react'

const HotListItems = memo((props) => {
    const hotList = props.hotList;
    console.log('---------');
    return (
        <div className={styles.hot}>
            <h1>热门推荐</h1>
            {
                hotList.map((item) => (
                    <div key={item.id} className={styles.item}>
                        {item.city}
                    </div>
                ))
            }
        </div>
    )
})

const Search = () => {
    // 单向数据流
    // 反复生成 useCallback
    const [query, setQuery] = useState('');
    const { suggestList, setSuggestList, hotList, setHotList } = useSearchStore()

    useEffect(() => {
        setHotList()
    }, [])

    const handleQuery = (query) => {
        // api 请求
        console.log('debounce后', query);
        setQuery(query);
        if (!query) {
            return
        }
        setSuggestList(query)
    }

    const suggestListStyle = {
        display: query ? 'block' : 'none'
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <SearchBox handleQuery={handleQuery} />
                {/* 将HotListItems作为组件，更好维护 */}
                <HotListItems hotList={hotList} />
                <div className={styles.list} style={suggestListStyle}>
                    {
                        suggestList.map((item) => (
                            <div key={item} className={styles.item}>
                                {item}
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}
export default Search
