$(document).ready(function() {
    $(".submit-comment").on("click", function(){
        const commentText = $(".comment-textarea").val();
        $(".comment-textarea").val('');
        $(".comment-section").append(`
        <li class="comment-item media">
            <img src="./img/unknown.png"
                class="mr-3">
            <div class="media-body">
                <h5 class="mt-0 mb-1">Unknown</h5>
                ${commentText}
            </div>
        </li>
        `);
    })

    $('.download').on('click', function() {
        download($('.test1').attr('href'),"strcode.png","image/jpg");
    });
});
