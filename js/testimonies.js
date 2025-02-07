const testimonCards = document.querySelectorAll('.testimon_card');
    const testimonPrevBtn = document.getElementById('testimonPrevBtn');
    const testimonNextBtn = document.getElementById('testimonNextBtn');
    const testimonIndicators = document.getElementById('testimonIndicators');
    let currentTestimonIndex = 0;

    function updateTestimony() {
        testimonCards.forEach((card, index) => {
            card.style.display = index === currentTestimonIndex ? 'block' : 'none';
        });
        updateIndicators();
    }

    function createIndicators() {
        testimonCards.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            if (index === currentTestimonIndex) {
                indicator.classList.add('active');
            }
            indicator.addEventListener('click', () => {
                currentTestimonIndex = index;
                updateTestimony();
            });
            testimonIndicators.appendChild(indicator);
        });
    }

    function updateIndicators() {
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentTestimonIndex);
        });
    }

    testimonNextBtn.addEventListener('click', () => {
        if (currentTestimonIndex < testimonCards.length - 1) {
            currentTestimonIndex++;
        } else {
            currentTestimonIndex = 0;
        }
        updateTestimony();
    });

    testimonPrevBtn.addEventListener('click', () => {
        if (currentTestimonIndex > 0) {
            currentTestimonIndex--;
        } else {
            currentTestimonIndex = testimonCards.length - 1;
        }
        updateTestimony();
    });

    createIndicators();
    updateTestimony();