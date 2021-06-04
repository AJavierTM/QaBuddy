import Page from './page'

class NotePage extends Page{

    get menu_toggle(){return $('.left_menu_toggle')}
    get settingsBtn(){return $('.settings_btn')}
    get logOutBtn(){return $$('.user_menu_label')[8]}
    get addButton(){return $('.ist_button_red')}
    get newTaskInput(){return $('.public-DraftEditor-content')}
    get newTaskButton(){return $('.plus_add_button')}

    async createNewTask(taskName){
        this.newTaskButton.click();
        browser.pause(3000)
        this.newTaskInput.setValue(taskName);
        browser.pause(1000)
        this.addButton.click();
    }

    async createTasks( taskNumber){
        for (let i = 1; i <= taskNumber; i++) {
            browser.pause(1000)
            this.newTaskInput.setValue("taskName" + i);
            browser.pause(2000)
            this.addButton.click();
        }
     }

     async getTaskByName(taskName){
        return browser.$('//div[contains(text(),"'+taskName+'")]')
     }

}

export default new NotePage();