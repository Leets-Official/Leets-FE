import Swal from 'sweetalert2';

export class Alert {
  static error(title: string) {
    Swal.fire({
      icon: 'error',
      title,
      confirmButtonText: '확인',
      confirmButtonColor: '#4a93ff',
    });
  }

  static success(title: string) {
    Swal.fire({
      icon: 'success',
      title,
      confirmButtonText: '확인',
      confirmButtonColor: '#4a93ff',
    });
  }
}
