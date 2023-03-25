import { asyncAppStaticData, asyncGetCurrentUserInformation } from '../processes';

export const initialization = async () => {
  return await Promise.all([asyncGetCurrentUserInformation(), asyncAppStaticData()]);
};
