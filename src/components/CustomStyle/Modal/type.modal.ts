import { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode | ReactNode[];
  width?: number;
  open?: boolean;
  title?: string;
  onClose?: () => void;
}
