const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
        items.forEach(btn => {
            btn.classList.remove('active');
        });  
        btnAll.classList.add('active');
    });
    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
        items.forEach(btn => {
            btn.classList.remove('active');
        });
        btnLovers.classList.add('active');
    });
    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
        items.forEach(btn => {
            btn.classList.remove('active');
        });
        btnChef.classList.add('active');
    });
    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
        items.forEach(btn => {
            btn.classList.remove('active');
        });
        btnGirl.classList.add('active');
    });
    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
        items.forEach(btn => {
            btn.classList.remove('active');
        });
        btnGuy.classList.add('active');
    });
    btnGrandmother.addEventListener('click', () => {
        typeFilter();
        items.forEach(btn => {
            btn.classList.remove('active');
        });
        btnGrandmother.classList.add('active');
    });
    btnGranddad.addEventListener('click', () => {
        typeFilter();
        items.forEach(btn => {
            btn.classList.remove('active');
        });
        btnGranddad.classList.add('active');
    });
    
};

export default filter;
