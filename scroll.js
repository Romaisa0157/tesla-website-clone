document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    if (document.onWayTo === null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered;
        if (destIndex >= 0 && destIndex < sections.length) {
            document.onWayTo = destIndex;
            window.scrollTo(0, sections[destIndex].offsetTop);
        }
    }

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
            document.lastCentered = index;
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        }
    });

    document.lastScrollPosition = window.pageYOffset;
});
