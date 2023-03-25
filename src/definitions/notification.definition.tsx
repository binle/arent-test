export interface NotificationDto {
  id: string;
  title: string;
  description?: string;
  extra?: { [key: string]: any };
}
