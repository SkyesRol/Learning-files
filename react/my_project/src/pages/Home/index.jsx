import useTitle from '@/hooks/useTitle'
import Loading from '@/components/Loading'

const Home = () => {
    useTitle('奶龙的首页');
    return (
        <div>
            Home
            <Loading />
        </div>
    )
}
export default Home