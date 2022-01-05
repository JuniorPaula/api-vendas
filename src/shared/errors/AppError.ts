/** Class de error da aplicação */
class AppError {
  constructor(readonly message: string, readonly statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
