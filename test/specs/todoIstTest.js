import LoginPage from '../pageobjects/loginPage'
import NotePage from '../pageobjects/notePage'
import * as constants from '../utils/constants'

describe ('Task Creation', () => {
    before(()=>{
        LoginPage.open();
        LoginPage.signInLinkClick()
        LoginPage.login(constants.USER_EMAIL, constants.USER_PASSWORD);
    })

    it('single task creation', () => {    
        const taskName=constants.TASK_NAME+new Date().getMilliseconds();
        NotePage.createNewTask(taskName);
        expect(NotePage.getTaskByName(taskName)).toHaveText(taskName);
    });

    it('multitask Creation Test', () => { 
        NotePage.createTasks(10);
        for(let i=1;i<10;i++){
        expect(NotePage.getTaskByName("taskName" + i)).toHaveText( "taskName" + i)
        }

    });

});
