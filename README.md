### test task superheros

use libs:

- awesome fonts icon
- react-animations
- react-glitch-effect
- uniqid
- @pnotify
- AntDesign

testing account: login: test@mail.com pass: 1234567

- Для бекенда используется firebase Realtime Database
- Вся логика пагинации, удаления и редактирования происходит на фронте
- При любом изменении каждый раз перерисует базу данных (используется PUT). Для
  больших коллекций данных этот подход не подойдет, нужно отправлять каждый
  новый объект а не всю коллекцию.
