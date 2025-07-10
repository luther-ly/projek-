    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    const totalSlides = slider.children.length;

    function showSlide(i) {
      slider.style.transform = 'translateX(' + (-i * 100) + '%)';
      dots.forEach(dot => dot.classList.remove('active'));
      dots[i].classList.add('active');
    }

    function nextSlide() {
      index = (index + 1) % totalSlides;
      showSlide(index);
    }

    setInterval(nextSlide, 3500);

    const definisi = document.getElementById('definisi');
    const arrow = document.getElementById('arrow');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          definisi.classList.add('visible');
          arrow.classList.add('hidden');
        }
      });
    });
    observer.observe(definisi);

    const komponenItems = document.querySelectorAll('.komponen-item');
    const komponenObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          komponenObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    komponenItems.forEach(item => komponenObserver.observe(item));

    const namaPBlocks = document.querySelectorAll('.nama_p');
    const namaObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          namaObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    namaPBlocks.forEach(item => namaObserver.observe(item));
