/* Класс, который записывает ошибку в консоль. */
const a = class {
    /**
     * Функция конструктора.
     */
	constructor() {
	}

   /**
    * It logs the error to the console.
    * @param  - param e: The error message returned by the server
    */
    public getErrerr(e: string): void {
        console.log(e)
    }
} 

export default a
