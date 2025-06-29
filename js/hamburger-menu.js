document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('menuOverlay');
    const links = overlay.querySelectorAll('a');

    const switchScroll = () => {
        if (overlay.classList.contains('active')) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    hamburger.addEventListener('click', () => {
        overlay.classList.toggle('active');
        // スクロール制御を追加
        document.body.classList.toggle("no-scroll");
        switchScroll();
    });

    // メニュー内リンククリック or 背景クリックで閉じる
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.tagName === 'A') {
            overlay.classList.remove('active');
            switchScroll();
        }
    });
});
