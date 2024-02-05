'use client';

import Swal from 'sweetalert2';
import { MAIN_COLOR, BACKGROUND_COLOR } from '@/constants';

export class Alert {
  static error(title: string) {
    Swal.fire({
      icon: 'error',
      title,
      confirmButtonText: '확인',
      confirmButtonColor: BACKGROUND_COLOR[MAIN_COLOR],
    });
  }

  static success(title: string) {
    Swal.fire({
      icon: 'success',
      title,
      confirmButtonText: '확인',
      confirmButtonColor: BACKGROUND_COLOR[MAIN_COLOR],
    });
  }
}
