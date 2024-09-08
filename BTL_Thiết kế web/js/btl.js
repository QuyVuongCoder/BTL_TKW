$(document).ready(function() {
    $('.tabs a').click(function(event) {
        event.preventDefault(); // Ngăn không cho liên kết mặc định xảy ra

        // Loại bỏ 'active' khỏi tất cả các tab và nội dung
        $('.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        // Thêm 'active' vào tab và nội dung được nhấp
        $(this).parent().addClass('active');
        $($(this).attr('href')).addClass('active');
    });
});