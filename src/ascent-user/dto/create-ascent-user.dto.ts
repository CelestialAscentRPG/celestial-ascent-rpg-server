export class CreateAscentUserDto {
  /**
   * 用户的电子邮件地址，也是账号
   */
  email: string;

  /**
   * 用户的密码，MD5加密
   */
  password: string;

  /**
   * 用户的昵称
   */
  nickname: string;
}
