import {
  AchievementResponseBodyDto,
  BodyGraphResponseBodyDto,
  MealHistoryResponseBodyDto,
  MealTypeEnum,
} from '../../../definitions';

import achievementByDateImage1 from './images/d01.jpg';
import mealHistoryMorningImage1 from './images/m01.jpg';
import mealHistoryLunchImage1 from './images/m01.jpg';
import mealHistoryDinnerImage1 from './images/m01.jpg';
import mealHistorySnackImage1 from './images/m01.jpg';

export const homeTestData: {
  achievementByDate: AchievementResponseBodyDto;
  bodyGraph: BodyGraphResponseBodyDto;
  mealHistory: MealHistoryResponseBodyDto;
} = {
  achievementByDate: { percent: 75, imageUrl: achievementByDateImage1 },
  bodyGraph: {
    list: [
      { index: 11, weight: 80, fat: 65 },
      { index: 10, weight: 70, fat: 55 },
      { index: 9, weight: 60, fat: 45 },
      { index: 8, weight: 50, fat: 40 },
      { index: 7, weight: 50, fat: 38 },
      { index: 6, weight: 55, fat: 36 },
      { index: 5, weight: 50, fat: 33 },
      { index: 4, weight: 45, fat: 30 },
      { index: 3, weight: 40, fat: 27 },
      { index: 2, weight: 35, fat: 25 },
      { index: 1, weight: 30, fat: 23 },
      { index: 0, weight: 25, fat: 20 },
    ],
  },
  mealHistory: {
    list: [
      { date: new Date(), imageUrl: mealHistoryMorningImage1, type: MealTypeEnum.Morning },
      { date: new Date(), imageUrl: mealHistoryLunchImage1, type: MealTypeEnum.Lunch },
      { date: new Date(), imageUrl: mealHistoryDinnerImage1, type: MealTypeEnum.Dinner },
      { date: new Date(), imageUrl: mealHistorySnackImage1, type: MealTypeEnum.Snack },
      { date: new Date(), imageUrl: mealHistorySnackImage1, type: MealTypeEnum.Snack },
    ],
  },
};
