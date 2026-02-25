'use client';

import Swal from 'sweetalert2';

export class Alert {
  static error(title: string) {
    Swal.fire({
      icon: 'error',
      title,
      confirmButtonText: '확인',
      confirmButtonColor: '#3685FC',
      customClass: { popup: 'swal-custom-popup' },
      scrollbarPadding: false,
    });
  }

  static success(title: string) {
    Swal.fire({
      icon: 'success',
      title,
      confirmButtonText: '확인',
      confirmButtonColor: '#3685FC',
      customClass: { popup: 'swal-custom-popup' },
      scrollbarPadding: false,
    });
  }
}
