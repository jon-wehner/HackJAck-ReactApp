import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        <input type="password" name="password" />
      </label>
    </form>
  )
}



export default LoginForm;