/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signup_sigin_poc",
        editProfile: "B2C_1_reset_pwd_poc"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1_signup_sigin_poc",
        },
        editProfile: {
            authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1_reset_pwd_poc",
        }
    },
    authorityDomain: "cbconsumertech.b2clogin.com"
}