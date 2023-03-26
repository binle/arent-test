import {
  AchievementResponseBodyDto,
  BodyGraphResponseBodyDto,
  ColumnDataResponseBodyDto,
  MealHistoryResponseBodyDto,
  MealTypeEnum,
  MyDiaryResponseBodyDto,
  MyExerciseResponseBodyDto,
} from '../../../definitions';

import achievementByDateImage1 from './images/d01.jpg';
import mealHistoryMorningImage1 from './images/m01.jpg';
import mealHistoryLunchImage1 from './images/l01.jpg';
import mealHistoryDinnerImage1 from './images/d02.jpg';
import mealHistorySnackImage1 from './images/m02.jpg';
import mealHistorySnackImage2 from './images/m03.jpg';
import columnDataImage1 from './images/column-1.jpg';
import columnDataImage2 from './images/column-2.jpg';
import columnDataImage3 from './images/column-3.jpg';
import columnDataImage4 from './images/column-4.jpg';
import columnDataImage5 from './images/column-5.jpg';
import columnDataImage6 from './images/column-6.jpg';
import columnDataImage7 from './images/column-7.jpg';
import columnDataImage8 from './images/column-8.jpg';

export const localTestData: {
  achievementByDate: AchievementResponseBodyDto;
  bodyGraph: BodyGraphResponseBodyDto;
  mealHistory: MealHistoryResponseBodyDto;
  myExercise: MyExerciseResponseBodyDto;
  myDiary: MyDiaryResponseBodyDto;
  columnData: ColumnDataResponseBodyDto;
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
      { date: new Date(), imageUrl: mealHistorySnackImage2, type: MealTypeEnum.Snack },
    ],
  },
  myExercise: {
    list: [
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
      { title: '家事全般（立位・軽い）', timeInMinutes: 10, calories: 26000 },
    ],
  },
  myDiary: {
    list: [
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description: 'テキストテキストテキストテキス',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        time: new Date(),
        title: '私の日記の記録が一部表示されます。',
        description:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    ],
  },
  columnData: {
    list: [
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage1,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage2,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage3,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage4,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage5,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage6,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage7,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage8,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage1,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage2,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage3,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage4,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage5,
      },
      {
        time: new Date(),
        title:
          '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ',
        tags: ['魚料理', '和食', 'DHA'],
        imageUrl: columnDataImage6,
      },
    ],
  },
};
