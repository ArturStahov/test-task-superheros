import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { BlockRatingView } from './StyledComponents';
import db from 'firebase/config';

export default function RatingViews({ serverId, size }) {
  const onChangeRating = useSelector(state => state.changeRating);

  const [ratingValue, setRatingValue] = useState(0);
  const ratingRef = db
    .firestore()
    .collection('publicHero')
    .doc(serverId)
    .collection('rating');

  const getRealtimeData = async () => {
    const data = await ratingRef.get();
    if (data.docs.length > 0) {
      const item = data.docs[0].data();
      const rating = item.rating;
      setRatingValue(rating);
      console.log('data from rating', data);
    }
  };
  useEffect(() => {
    getRealtimeData();
  }, [onChangeRating]);

  return (
    <BlockRatingView>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={ratingValue} size={size} readOnly />
      </Box>
    </BlockRatingView>
  );
}
