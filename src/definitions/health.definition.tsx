/* eslint-disable no-unused-vars */
export enum GraphTimeEnum {
  Day = 'Day',
  Week = 'Week',
  Month = 'Month',
  Year = 'Year',
}

export enum MealTypeEnum {
  Morning = 'Morning',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Snack = 'Snack',
}

export interface AchievementResponseBodyDto {
  percent: number;
  imageUrl: string;
}

export interface BodyGraphResponseBodyDto {
  list: { weight: number; fat: number; index: number }[];
}

export interface MealHistoryDto {
  imageUrl: string;
  type: MealTypeEnum;
  date: Date;
}

export interface MealHistoryResponseBodyDto {
  list: MealHistoryDto[];
}
