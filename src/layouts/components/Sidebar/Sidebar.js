import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, LiveIcon, LiveActiveIcon, UserIcon, UserActiveIcon } from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '../SuggestedAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserIcon />}
                    activeIcon={<UserActiveIcon />}
                />
                <MenuItem title="live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            {/* <SuggestedAccounts label="Following accounts" /> */}
        </aside>
    );
}

export default Sidebar;
