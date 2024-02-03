export type UserType = 'MAKE' | 'OBJECTIVE_CHECK' | 'OBJECTIVE_VALIDATE' | 'TOOB_VALIDATE' | 'FMAP_ADMIN' | 'DATAADMIN';

export interface UserModel {
  state: UserType;
  extUserId: string;
  extName: string;
  extClaims: string;
  extHrCode: string;
  extFullName: string;
  extJDs: string;
  extEmail: string;
  extPhone: string;
  extPos: string;
  extDepartment: string;
  extPosition: string;
  extTitle: string;
  extGroupName: string;
  id: string;
}
