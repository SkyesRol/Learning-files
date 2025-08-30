import useTitle from '@/hooks/useTitle'
import { showToast } from '@/components/Toast/ToastController';
import {
    Button
} from 'react-vant'
const Home = () => {
    useTitle('奶龙的首页');
    return (
        <div>
            Home
            <Button type='primary' onClick={() => showToast(1, 2, 3)}>showToast</Button>
        </div>
    )
}
export default Home