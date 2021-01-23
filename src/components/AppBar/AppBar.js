import noIco from '../../images/ico/no-user-ico.png';

import { AppBlock, UserName, Avatar } from './StyledComponent';

export function AppBar({ userName, userIco = noIco }) {
  return (
    <AppBlock>
      <Avatar src={userIco} alt="user avatar image" />
      <UserName>{userName}</UserName>
    </AppBlock>
  );
}
