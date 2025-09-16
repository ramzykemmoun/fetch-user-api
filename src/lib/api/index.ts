import { User } from "./user";

export class MizaniyaPayApi {
  user: User;

  constructor() {
    this.user = new User();
  }
}

export const api = new MizaniyaPayApi();
