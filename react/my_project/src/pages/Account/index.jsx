import useTitle from '@/hooks/useTitle'
import {
    useState
} from 'react'
import {
    Image,
    Cell,
    CellGroup,
    ActionSheet,
    Popup,
    Loading
} from 'react-vant'
import {
    ServiceO,
    FriendsO,
    StarO,
    SettingO,
    UserCircleO
} from '@react-vant/icons'
import styles from './account.module.css'
const Account = () => {
    useTitle('我的账号')
    const [userInfo, setUserInfo] = useState({
        nickname: '奶龙',
        slogan: '我是奶龙',
        avatar: 'https://p3.music.126.net/YgK8jQRrhm2FRH_gAChG2A==/109951166176194555.jpg',
        level: '5级'
    })
    return (

        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    round
                    width="64px"
                    height="64px"
                    src={userInfo.avatar}
                    style={{ cursor: 'pointer' }}
                />
                <div className='ml4'>
                    <div className={styles.nickname}>昵称：{userInfo.nickname}</div>
                    <div className={styles.level}>等级：{userInfo.level}</div>
                    <div className={styles.slogan}>签名：{userInfo.slogan}</div>
                </div>
            </div>
            <div className='mt3'>
                <CellGroup inset>
                    <Cell title='服务' icon={<ServiceO />} isLink />
                </CellGroup>
                <CellGroup inset className='mt2'>

                    <Cell title="收藏" icon={<StarO />} isLink />
                    <Cell title="朋友圈" icon={<FriendsO />} isLink />
                </CellGroup>

                <CellGroup inset className='mt2'>
                    <Cell title="设置" icon={<SettingO />} isLink />
                </CellGroup>

            </div>
        </div>

    )
}
export default Account
