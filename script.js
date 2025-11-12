document.addEventListener('DOMContentLoaded', function () {
    const msItems = document.querySelectorAll('.ms1');

    msItems.forEach(item => {
        const modal = item.querySelector('.modal');
        const openBtns = item.querySelectorAll('.modalBtn, .icon');
        const closeBtn = item.querySelector('.close');
        const header = item.querySelector('.modal-header'); // 헤더 선택

        // 이미지나 버튼 더블클릭 시 모달 열기
        openBtns.forEach(btn => {
            btn.addEventListener('dblclick', () => {
                modal.style.display = 'block';
            });
        });

        // 닫기 버튼
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // 모달 바깥 클릭 시 닫기
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // ----------- 드래그 이벤트 -----------
        if (header) {
            let isDragging = false;
            let offsetX, offsetY;

            header.addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX = e.clientX - modal.offsetLeft;
                offsetY = e.clientY - modal.offsetTop;
                modal.style.cursor = 'grabbing';
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                modal.style.left = e.clientX - offsetX + 'px';
                modal.style.top = e.clientY - offsetY + 'px';
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
                modal.style.cursor = 'grab';
            });
        }
    });
});

