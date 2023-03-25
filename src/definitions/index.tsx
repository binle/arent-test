import { AccountDto } from './account.definition';
import { NotificationDto } from './notification.definition';

export * from './account.definition';
export * from './notification.definition';

export interface IUserData {
  accountInfo?: AccountDto;
  notifications?: NotificationDto[];
}

export type RecordType = { [key: string]: any };

export interface IApplicationContextData {
  userData?: IUserData;
  staticData?: RecordType;
}

export interface LoadingEmitData {
  display: boolean;
  message?: string;
}
