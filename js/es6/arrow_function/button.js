function Button(id){
            this.element = document.querySelector(`#${id}`)
            console.log(this);
            console.log(this.element);
            
            this.bindEvent();
        }


Button.prototype.bindEvent = function(){
    // 发生了this的丢失问题
            this.element.addEventListener('click', function(){
                // this => this.element
                //this.element.style.backgroundColor = 'red';
                console.log(this.element);
                
            })
        }



        // Button.prototype.bindEvent = function(){
    
        //     this.element.addEventListener('click', () => {
                
        //         this.element.style.backgroundColor = 'red';
        //     })
        // }

// Button.prototype.bindEvent = function(){
    
//             this.element.addEventListener('click', function(){
                
//                 this.element.style.backgroundColor = 'red';
//             }.bind(this)) // 如果用call apply则会立即执行
//         }


        // Button.prototype.bindEvent = function(){
    
        //     this.element.addEventListener('click', this.setBgColor.bind(this)) 

        // }
Button.prototype.setBgColor = function(){
        this.element.style.backgroundColor = '#1abc9c';
        // this.element2......
}