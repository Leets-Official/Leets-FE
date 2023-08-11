import Swal from 'sweetalert2';

export class Alert {
  static error(title: string) {
    Swal.fire({
      icon: 'error',
      title,
      confirmButtonText: '확인',
      confirmButtonColor: '#fa9625',
    });
  }

  static success(title: string) {
    Swal.fire({
      icon: 'success',
      title,
      confirmButtonText: '확인',
      confirmButtonColor: '#fa9625',
    });
  }
}
