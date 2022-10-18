btn_global = document.querySelector('.btn_global')
btn_global_layout = document.querySelector('.global_lang')

btn_global.addEventListener("click", function() {
    if(btn_global_layout.style.display == 'none'){
        btn_global_layout.style.display = 'flex';
    }
    else {
        btn_global_layout.style.display = 'none';
    }
})


list_languages = document.querySelectorAll('.language_select')
list_languages_span = document.querySelectorAll('.language_select span')


list_languages.forEach( (list_language) => {
    list_language.addEventListener("click", function(){
        if(list_language.classList != 'selected_language'){
            for(var i = 0; i<list_languages.length; i++){
                list_languages[i].classList.remove("selected_language")
                if(list_languages_span[i].style.display != 'none'){
                    list_languages_span[i].style.display = 'none'
                }
            }
            list_language.classList.add('selected_language')
        }

    })
})
