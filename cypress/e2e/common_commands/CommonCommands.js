export class CommonCommands {

    //This method is used to generate a random email and be used within the test. For security purposes
    static generateRandomEmail() {
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 100000);
      return `test${timestamp}${randomNumber}@gmail.com`;
    }

    //This method is used to generate a random email and be used within the test. For security purposes
    static generateRandomPassword() {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 100000);
        return `UniPass${timestamp}${randomNumber}`;
      }
  }