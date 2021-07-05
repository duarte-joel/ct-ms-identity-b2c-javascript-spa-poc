/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        //signUpSignIn: "B2C_1_reset_pwd_poc",
        //signUpSignIn: "B2C_1A_DisplayControl_SSPR_SignUpOrSignIn",
        //signUpSignIn: "B2C_1_signup_sigin_poc",
        signUpSignIn: "B2C_1_sigin_poc",
        //signUpSignIn: "B2C_1A_SIGNUP_SIGNIN",
        editProfile: "B2C_1_profile_edit_poc",
        forgotPassword: "B2C_1_reset_pwd_poc"
    },
    authorities: {
        signUpSignIn: {
            //authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1A_DisplayControl_SSPR_SignUpOrSignIn",
            //authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1_signup_sigin_poc",
            authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1_sigin_poc",
            //authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1_reset_pwd_poc",
            //authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN"
        },
        forgotPassword: {
            authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1_reset_pwd_poc",
        },
        editProfile: {
            authority: "https://cbconsumertech.b2clogin.com/cbconsumertech.onmicrosoft.com/B2C_1_profile_edit_poc",
        }
    },
    authorityDomain: "cbconsumertech.b2clogin.com"
}