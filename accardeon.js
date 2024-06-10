const tool = document.querySelector('.tool');
    const summary = document.querySelector('#summary');

    summary.addEventListener('mouseover', function() {
        const rect = summary.getBoundingClientRect();
        tool.style.display = 'block';
        tool.style.top = rect.bottom + window.scrollY + 'px';
        tool.style.left = rect.left + window.scrollX + 'px';
    });

    summary.addEventListener('mouseout', function() {
        tool.style.display = 'none';
    });