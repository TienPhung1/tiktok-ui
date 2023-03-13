import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faHouse,
    faKeyboard,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'indo',
                    title: 'Indonesia',
                },
                {
                    type: 'language',
                    code: 'thaid',
                    title: 'Thái Lan',
                },
                {
                    type: 'language',
                    code: 'cam',
                    title: 'Campodia',
                },
                {
                    type: 'language',
                    code: 'japan',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'han',
                    title: 'Korea',
                },
                {
                    type: 'language',
                    code: 'anh',
                    title: 'England',
                },
                {
                    type: 'language',
                    code: 'amer',
                    title: 'America',
                },
                {
                    type: 'language',
                    code: 'fra',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'bra',
                    title: 'brazil',
                },
                {
                    type: 'language',
                    code: 'ita',
                    title: 'Itali',
                },
                {
                    type: 'language',
                    code: 'china',
                    title: 'China',
                },
                {
                    type: 'language',
                    code: 'egypt',
                    title: 'Egypt',
                },
                {
                    type: 'language',
                    code: 'port',
                    title: 'Portugal',
                },
                {
                    type: 'language',
                    code: 'spain',
                    title: 'Spain',
                },
                {
                    type: 'language',
                    code: 'bel',
                    title: 'belgium',
                },
                {
                    type: 'language',
                    code: 'sing',
                    title: 'Singapore',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    //bien currentUser
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@tienn',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faHouse} />,
            title: 'Buisiness Suite',
            to: '/buisiness',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logoLink')}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>

                {/**Search... */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/bb381037223f2a0eb7c449640722fbe4~c5_100x100.jpeg?x-expires=1678413600&x-signature=4FjcCFrX4GkFzn84YOk0G41kCdU%3D"
                                alt="PhungTien"
                                fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/118321/6259531c4fc45.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
