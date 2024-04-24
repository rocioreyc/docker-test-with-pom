const { loginPage } = require("./pageObjects/loginPage");
import { generalUser } from "../support/users.js";

describe('login con POM', function() {
    beforeEach( () => {
        loginPage.visit()
    });

    it('login error', function() {
        loginPage.login(generalUser.email, generalUser.password);
        loginPage.validateError();
    })
})