import { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { BlockAddRating, Title } from './StyledComponent';
import db from 'firebase/config';
import * as action from 'redux/rating/rating-action';

import { errorNotification } from 'Notification/errorHandler';
export default function Raiting({ serverId }) {
  const [ratingValue, setRatingValue] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const ratingRef = db
    .firestore()
    .collection('publicHero')
    .doc(serverId)
    .collection('rating');

  useEffect(() => {
    return () => {
      dispatch(action.changeRating(false));
    };
  }, []);

  const handlerSetRating = async () => {
    if (ratingValue) {
      const data = await ratingRef.get();
      if (data.docs.length == 0) {
        console.log('No rating');
        const rating = {
          count: 1,
          ratingSum: Number(ratingValue),
          rating: Number(ratingValue),
        };
        await ratingRef.add(rating);
      } else {
        const item = data.docs[0].data();
        const serverId = data.docs[0].id;
        const count = item.count + 1;
        const ratingSum = item.ratingSum + ratingValue;
        const rating = Math.round(ratingSum / count);
        const updateItem = {
          count,
          ratingSum,
          rating,
        };

        await ratingRef.doc(serverId).update(updateItem);
        dispatch(action.changeRating(true));
      }

      console.log('ratingData', data);
      setIsDisabled(true);
      return;
    }
    errorNotification('firs change rating! No rating value!');
  };

  return (
    <BlockAddRating>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">
          <Title>Set hero rating</Title>
        </Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
        />
      </Box>
      <Button
        type="button"
        disabled={isDisabled}
        variant="contained"
        color="primary"
        onClick={handlerSetRating}
      >
        Add
      </Button>
    </BlockAddRating>
  );
}
