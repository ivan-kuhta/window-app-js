const forms = () => {
    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
        })
    });

};

export default forms;