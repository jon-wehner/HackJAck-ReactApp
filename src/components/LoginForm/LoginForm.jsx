"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LoginForm = function () {
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    return (<form>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" value={email} onChange={function (e) { return setEmail(e.target.value); }}/>
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" value={password} onChange={function (e) { return setPassword(e.target.value); }}/>
      </label>
    </form>);
};
exports["default"] = LoginForm;
