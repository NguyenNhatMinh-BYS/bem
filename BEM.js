//toat function
function toast({
    title = ' ',
    message= ' ',
    type = ' info ',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div')
        toast.classList.add('toast');
        toast.innerHTML = `
        <div class="toat__icon">
        <i class="fas fa-check-circle"></i>
    </div>
    <div class="toat__main">
        <h class="toat__title">SUCCESS</h>
        <p class="toat__text">Số ca mắc Covid-19 mới trải rộng 50 tỉnh thành, nhiều F0 cộng đồng</p>
    </div>
    <div class="toat__close">
        <i class="fas fa-times-circle"></i>
    </div>   
        `;
        main.appendChild(toast);
    }
}

toast({
    title : 'Success ',
    message: ' Số ca mắc Covid-19 mới trải rộng 50 tỉnh thành, nhiều F0 cộng đồng ',
    type : ' success ',
    duration : 3000
});