class EnvURLGetter{
    //Execute Your Tests on different environment using Environment Varialble in Cypress
    //Refer: https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
    getBaseUrl(){
        let url = Cypress.env('ENV')
        if (url=='qa'){
            return "https://www.redbus.in";
        }
        else if (url=='stg'){
            return "https://www.redbus.in";
        }
        else if (url=='prod'){
            return "https://www.redbus.in";
        }
    }
}

// npx cypress run  --env ENV="production"
// export default new EnvURLGetter
export default EnvURLGetter;


// export default class Demo{

// }