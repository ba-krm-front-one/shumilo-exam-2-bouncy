
/* ISOTOPE AND MASONRY */
function useIsotope(event) {

    // init Isotope
    let isotopeGrid = new Isotope( '#portfolio-imgs-inner', {
        itemSelector: '.item',
        masonry: {
            // use element for option
            columnWidth: '.item',
            itemSelector: '.item',
            transitionDuration: '0.5s',
            gutter: 8,
            isFitWidth: true,
            horizontalOrder: true,
        }
    });

    let applyFilterFromLink = (linkObject) => {
        let filterValue = linkObject.dataset.filter;

        isotopeGrid.arrange({ filter: filterValue });
    };

    let filterGrid = function( event ) {
        event.preventDefault();

        applyFilterFromLink(this);

        let activeBtn = document.querySelector('.filter-btn--active');
        if (activeBtn) {
            activeBtn.classList.remove('filter-btn--active');
        }
        this.classList.add('filter-btn--active');
    };

    document.querySelectorAll('.filter-btn').forEach(filterBtn => {
        filterBtn.addEventListener( 'click', filterGrid);
    });


    let activeBtn = document.querySelector('.filter-btn--active');

    applyFilterFromLink(activeBtn);
}

document.addEventListener('DOMContentLoaded', useIsotope);

/* END ISOTOPE */



/* SLICK SLIDER */
$(document).ready(function(){
    $('.team__carousel').slick({
        arrows: false,
        dots: true,
    });
});

$(document).ready(function(){
    $('.comments').slick({
        arrows: false,
        dots: true,
    });
});

/* END SLICK SLIDER */