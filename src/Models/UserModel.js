export class UserModel {
    constructor(
      id = 0,
      fullname="",
      email = "",
      avatarURL = "",
      password = "",
      rPassword = ""
    ) {
      this.id = id;
      this.fullname = fullname;
      this.email = email;
      this.avatarURL = avatarURL;
      this.password = password;
      this.rPassword = rPassword;
    }
  }
  