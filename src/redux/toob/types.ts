import { OutputModel, ResponseToobUser } from 'types/toob.interface';

import { DataSAType } from 'pages/toob/MCVScreen/TypeMCV';

export interface ToobState {
  isOpenCreateSa: boolean;
  isOpenShowMessageSubmit: boolean;
  isCountSlide: number;
  outputByUser: OutputModel | null;
  dataToobUser: {
    listToob: ResponseToobUser['acts'];
  };
  isSwitchTabs: boolean;
  isBackTabMake: boolean;
  dataSA: DataSAType | null;
  visibleMCVScreen: boolean;
}
