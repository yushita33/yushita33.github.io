document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('menuOverlay');
    const links = overlay.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
      overlay.classList.toggle('active');
    });

    // メニュー内リンククリック or 背景クリックで閉じる
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.tagName === 'A') {
            overlay.classList.remove('active');
        }
    });
});
