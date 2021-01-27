import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import { BlockAddLike, Title } from './StyledComponent';
import db from 'firebase/config';

export default function Likes({ serverId }) {
  const [likeBadValue, setLikeBadValue] = useState(0);
  const [likeGoodValue, setLikeGoodValue] = useState(0);
  const [isDisabledGood, setIsDisabledGood] = useState(false);
  const [isDisabledBad, setIsDisabledBad] = useState(false);
  const [serverLikesID, setServerLikesID] = useState(null);

  const likeRef = db
    .firestore()
    .collection('publicHero')
    .doc(serverId)
    .collection('likes');

  const initialLikes = async () => {
    const data = await likeRef.get();
    if (data.docs.length == 0) {
      const likeObj = {
        likeGood: 0,
        likeBad: 0,
      };
      await likeRef.add(likeObj);
    } else {
      const serverLikeRefId = data.docs[0].id;
      const item = data.docs[0].data();
      setLikeBadValue(item.likeBad);
      setLikeGoodValue(item.likeGood);
      setServerLikesID(serverLikeRefId);
      console.log('likesData', item);
    }
  };
  useEffect(() => {
    initialLikes();
  }, []);

  const like = async () => {
    setIsDisabledGood(true);
    const updateItem = {
      likeGood: likeGoodValue + 1,
    };
    setLikeGoodValue(prev => (prev += 1));
    await likeRef.doc(serverLikesID).update(updateItem);
  };

  const dislike = async () => {
    setIsDisabledBad(true);
    const updateItem = {
      likeBad: likeBadValue + 1,
    };
    setLikeBadValue(prev => (prev += 1));
    await likeRef.doc(serverLikesID).update(updateItem);
  };

  return (
    <BlockAddLike>
      <Button
        onClick={like}
        type="button"
        disabled={isDisabledGood}
        variant="contained"
        color="primary"
        endIcon={<ThumbUpAltIcon />}
        style={{ marginRight: 10 }}
      >
        Likes: {likeGoodValue}
      </Button>
      <Button
        onClick={dislike}
        type="button"
        disabled={isDisabledBad}
        variant="contained"
        color="primary"
        endIcon={<ThumbDownIcon />}
      >
        Dislikes: {likeBadValue}
      </Button>
    </BlockAddLike>
  );
}
