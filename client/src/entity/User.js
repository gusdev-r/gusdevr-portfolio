export class User {
  constructor(
    username,
    email,
    password,
    role,
    createdAt,
    updatedAt,
    locked,
    enabled,
  ) {
    this.username = username
    this.email = email
    this.password = password
  }
}
