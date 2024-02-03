export interface ToobModel {
  accountable: string;
  actId: string;
  createdDate: string;
  createdUserId: string;
  createdUserName: string;
  id: string;
  name: string;
  onum: number;
  sentDate?: string;
  sosSoi: string;
  statep: string;
  statepName: string;
  toDate: string;
  toDateString: string;
  validator: string;
}

interface ActIpams {
  actId: string;
  action: string;
  id: string;
  insight: string;
  mindfullness: string;
  passion: string;
}

interface actOutputUsers {
  actId: string;
  actUserId: string;
  id: string;
  userType: UserTypeSa;
}

interface actOutputs {
  actId: string;
  createdDate: string;
  createdUserid: string;
  id: string;
  name: string;
  note: string;
  onum: number;
  toDate: Date;
  toDateString: string;
}

interface actUsers {
  actId: string;
  actUserId: string;
  id: string;
  userType: UserTypeSa;
  note: string;
  state: string;
  stateDate: string;
}

interface acts {
  accountable: string;
  actType: string;
  apvMethod: string;
  apvMethodName: string;
  checker: string;
  companyId: string;
  companyName: string;
  actId: string;
  createdDate: Date;
  createdUserId: string;
  id: string;
  name: string;
  onum: number;
  sentDate: string;
  statep: string;
  toDate: Date;
  toDateString: string;
  createdUserName: string;
  functId: string;
  functName: string;
  ipamId: string;
  ipamName: string;
  mapFlowId: string;
  mapFlowName: string;
  note: string;
  priorityId: string;
  priorityName: string;
  role: string;
  rowState: string;
  saType: string;
  saTypeName: string;
}

export interface ToobDetalModel {
  actIpams: ActIpams[];
  actOutputUsers: actOutputUsers[];
  actOutputs: actOutputs[];
  actUsers: actUsers[];
  acts: acts[];
}

export type OutputModel = Partial<acts>;

export type Acts = {
  accountable: string;
  actId: string;
  id: string;
  name: string;
  statepName: string;
  statep: string;
  description: string;
  note: string;
};

export interface ActionType<T> {
  type: 'string';
  payload: T;
}

type UserTypeSa = 'M' | 'A' | 'V' | 'C';
type Status = '0' | '1' | '2' | '3' | '4' | '5' | 'R' | 'C' | 'Y';

export interface ResponseToobUser {
  acts: Acts[];
}

export type PayloadListToob = {
  userType?: UserTypeSa;
  actId?: string;
  statep?: Status;
  stateuName?: string;
  toDate?: string;
  toDateString?: 'string';
  validator?: string;
};
export interface PayloadListToobUserRequest {
  payload: PayloadListToob;
  type: string;
}

export type PayloadInfoToob = {
  id: 'string';
};
export interface ResponseInfoToob {
  acts: Acts[];
}

export type screenValue = 'MAKE' | 'CHECK' | 'VALIDATE';
