export class UserModel{
    constructor(
        public name: string,
        public username: string,
        public email: string,
        public password: string,
        public telephone: Number,
        public image: string
        ){}
}