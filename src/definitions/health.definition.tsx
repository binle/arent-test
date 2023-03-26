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

export interface ExerciseDto {
  title: string;
  timeInMinutes: number;
  calories: number;
}

export interface MyExerciseResponseBodyDto {
  list: ExerciseDto[];
}

export interface DiaryDto {
  time: Date;
  title: string;
  description: string;
}

export interface MyDiaryResponseBodyDto {
  list: DiaryDto[];
}
