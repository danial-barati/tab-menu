let _li = document.querySelectorAll('.tab_li')
        let _para = document.querySelectorAll('.para>div')
        _li.forEach((val, i) => {
            val.addEventListener('click',()=>{
                for (let index = 0; index < _li.length; index++) {
                    if (i != index) {
                        _li[index].classList.remove('clickli')
                        _li[index].classList.add('nothover')
                        _para[index].style.opacity=0
                    }else{
                        _li[index].classList.add('clickli')
                        _li[index].classList.remove('nothover')
                        _para[index].style.opacity=1
                    }
                    
                }
            })
        });