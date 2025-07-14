class AlertService {
    constructor(){
        this.alerts = {};
    }
    addAlert(symbol,alertText){
        this.alerts[symbol] = alertText;
        this.renderAlerts();
    }
    removeAlert(symbol){
        delete this.alerts[symbol];
    }

    renderAlerts(){};
}

const alertService = new AlertService();

class MyComponent{
    constructor(thing){
        this.componentId = Symbol(thing);
    }

    errorHandler(msg){
        alertService.addAlert(this.componentId,msg);
        setTimeout(()=>{
            alertService.removeAlert(this.componentId);
            console.log('Removed alert',this.componentId);
            
        },5000);
    }
}

let list = new MyComponent('listComponent');
let list2 = new MyComponent('listComponent');
let form = new MyComponent('inputComponent');


list.errorHandler('Problem1');
list2.errorHandler('Uh oh!')




