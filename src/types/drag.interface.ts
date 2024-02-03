import { Acts } from 'redux/toob/types';

export type ColDrag = 'requested' | 'toDo' | 'inProgress' | 'done';
export type TaskStatus = {
  [key in ColDrag]: {
    name: string;
    items: Acts[];
  };
};

export type CheckBox = {
  id: string;
};
