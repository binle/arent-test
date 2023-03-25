import { JWT_AUTHENTICATION, TestAccount } from '../../constants';
import {
  AchievementResponseBodyDto,
  BodyGraphResponseBodyDto,
  GraphTimeEnum,
  MealHistoryResponseBodyDto,
} from '../../definitions';
import { homeTestData } from './test-data';
import { axiosClient } from './_axios-client';

export const asyncGetAchievementByDate = async (fromDate: Date, toDate: Date): Promise<AchievementResponseBodyDto> => {
  const jwt = localStorage.getItem(JWT_AUTHENTICATION);
  if (jwt === TestAccount) {
    return homeTestData.achievementByDate;
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
    return homeTestData.bodyGraph;
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
      return homeTestData.mealHistory;
    }
    return { list: [] };
  }

  return (
    await axiosClient.get<MealHistoryResponseBodyDto>('/api/health/achievement', {
      params: { fromDate, offset, limit },
    })
  ).data;
};
