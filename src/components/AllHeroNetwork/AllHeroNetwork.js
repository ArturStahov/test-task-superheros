import { useState, useEffect } from 'react';
import { Overlay, Images, Item, List } from './StyledComponent';
import db from '../../firebase/config';

export function AllHeroNetwork({ onPreviewItem }) {
  const [allHero, setAllHero] = useState([]);

  const getRealtimeData = async () => {
    await db
      .firestore()
      .collection(`publicHero`)
      .onSnapshot(data => {
        const dataItems = data.docs.map(doc => ({
          ...doc.data(),
          serverId: doc.id,
        }));
        console.log('dataGetAllRealtime', dataItems);
        setAllHero(dataItems);
      });
  };
  useEffect(() => {
    getRealtimeData();
  }, []);

  return (
    <List>
      {allHero.map(item => (
        <Item key={item.serverId}>
          <Overlay onClick={() => onPreviewItem(item)}>
            <Images src={item.webImageUrl} alt={item.name} />
          </Overlay>
        </Item>
      ))}
    </List>
  );
}
