document.addEventListener("DOMContentLoaded", function() {
    const writingZone = document.querySelector(".writing-zone");
    const titleInput = document.querySelector(".title input");

    const savedWritingContent = localStorage.getItem('writingZoneContent');
    if (savedWritingContent) {
        writingZone.innerHTML = savedWritingContent;
    }

    const savedTitleContent = localStorage.getItem('titleContent');
    if (savedTitleContent) {
        titleInput.value = savedTitleContent;
    }

    writingZone.addEventListener('input', function() {
        localStorage.setItem('writingZoneContent', writingZone.innerHTML);
    });

    titleInput.addEventListener('input', function() {
        localStorage.setItem('titleContent', titleInput.value);
    });
});
