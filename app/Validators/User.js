"use strict";

class User {
  get rules() {
    return {
      name: 'required',
      username: 'required',
      email: 'required',
      password: 'required',
      type_user_id: 'required',
    }
  }
  get messages() {
    return {
      'name.required': 'Informe o nome corretamente',
      'username.required': 'Informe o username corretamente',
      'email.required': 'Informe o email corretamente',
      'password.required': 'Informe o password corretamente',
      'type_user_id.required': 'Informe o type_user_id corretamente',
    }
  }
}

module.exports = User;
