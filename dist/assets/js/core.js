let menuBar = document.getElementById('menu-bar'),
    overlay = document.getElementById('overlay');
menuBar.addEventListener('click', function(event){
    let targetEl = event.target,
        resMenu = document.getElementById('res-menu');

        if(resMenu.className.indexOf('show') === -1){
            overlay.style.visibility = 'visible';
            resMenu.className += ' show';
            targetEl.className = targetEl.className.replace('fa-bars', 'fa-close');
            targetEl.style.left = '120px';
            targetEl.style.top = '0';

        }else{
            overlay.style.visibility = 'hidden';
            resMenu.className = resMenu.className.replace(' show', '');
            targetEl.className =  targetEl.className.replace('fa-close', 'fa-bars');
            targetEl.style.left = '15px';
            targetEl.style.top = '15px';
        }
});