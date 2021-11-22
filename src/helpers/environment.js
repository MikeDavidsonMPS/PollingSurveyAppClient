let APIURL = ""

switch (window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'https://localhost:44303/api'
        break;
        //what local host is the server set to???? Double check this because i got it from the env file
    case '':
        APIURL = 'http://pollsurveyapp-env.eba-jk6fyvwy.us-east-2.elasticbeanstalk.com/'
    //need to know where we're deploying this to in order to get the second case working
}

export default APIURL