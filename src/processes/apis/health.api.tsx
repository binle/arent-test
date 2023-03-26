import { JWT_AUTHENTICATION, TestAccount } from '../../constants';
import {
  AchievementResponseBodyDto,
  BodyGraphResponseBodyDto,
  GraphTimeEnum,
  MealHistoryResponseBodyDto,
  MyDiaryResponseBodyDto,
  MyExerciseResponseBodyDto,
} from '../../definitions';
import { localTestData } from './test-data';
import { axiosClient } from './_axios-client';

export const asyncGetAchievementByDate = async (fromDate: Date, toDate: Date): Promise<AchievementResponseBodyDto> => {
  const jwt = localStorage.getItem(JWT_AUTHENTICATION);
  if (jwt === TestAccount) {
    return localTestData.achievementByDate;
  }
  return (
    await axiosClient.get<AchievementResponseBodyDto>('/api/health/achievement', { params: { fromDate, toDate } })
  ).data;
};

export const asyncGetBodyFatGraph = async (
  fromDate: Date,
  toDate: Date,
  timeType: GraphTimeEnum,
): Promise<BodyGraphResponseBodyDto> => {
  const jwt = localStorage.getItem(JWT_AUTHENTICATION);
  if (jwt === TestAccount) {
    return localTestData.bodyGraph;
  }

  return (
    await axiosClient.get<BodyGraphResponseBodyDto>('/api/health/body-fat-graph', {
      params: { fromDate, toDate, timeType },
    })
  ).data;
};

export const asyncGetMealHistory = async (
  fromDate: Date,
  offset?: number,
  limit?: number,
): Promise<MealHistoryResponseBodyDto> => {
  const jwt = localStorage.getItem(JWT_AUTHENTICATION);
  if (jwt === TestAccount) {
    if (!offset) {
      return localTestData.mealHistory;
    }
    return { list: [] };
  }

  return (
    await axiosClient.get<MealHistoryResponseBodyDto>('/api/health/meal-history', {
      params: { fromDate, offset, limit },
    })
  ).data;
};

export const asyncGetMyExercise = async (
  fromDate: Date,
  toDate: Date,
  offset?: number,
  limit?: number,
): Promise<MyExerciseResponseBodyDto> => {
  const jwt = localStorage.getItem(JWT_AUTHENTICATION);
  if (jwt === TestAccount) {
    if (!offset) {
      return localTestData.myExercise;
    }
    return { list: [] };
  }

  return (
    await axiosClient.get<MyExerciseResponseBodyDto>('/api/health/my-exercise', {
      params: { fromDate, offset, limit },
    })
  ).data;
};

export const asyncGetMyDiary = async (
  fromDate: Date,
  offset?: number,
  limit?: number,
): Promise<MyDiaryResponseBodyDto> => {
  const jwt = localStorage.getItem(JWT_AUTHENTICATION);
  if (jwt === TestAccount) {
    if (!offset) {
      return localTestData.myDiary;
    }
    return { list: [] };
  }

  return (
    await axiosClient.get<MyDiaryResponseBodyDto>('/api/health/my-diary', {
      params: { fromDate, offset, limit },
    })
  ).data;
};
