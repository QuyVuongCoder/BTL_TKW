//Đăng Ký
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    //Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp không
    if (password !== confirmPassword) {
        alert("Hai lần nhập mật khẩu không giống nhau!");
        return;
    }

    //Kiểm tra xem tên người dùng đã tồn tại hay chưa
    if (localStorage.getItem(username)) {
        alert("Tên người dùng đã được đăng ký!");
    } else {
        localStorage.setItem(username, password);
        localStorage.setItem('isLoggedIn', 'true');
        alert("Đăng ký thành công!");
        //đến trang chủ
        window.location.href = 'index.html';
    }
};

//Đăng nhập
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Lấy mật khẩu đã lưu trong localStorage
    const storedPassword = localStorage.getItem(username);

    //Kiểm tra thông tin đăng nhập
    if (storedPassword && storedPassword === password) {
        alert("Đăng nhập thành công!");
        localStorage.setItem('isLoggedIn', 'true');
        //Chuyển hướng người dùng tới trang chính sau khi đăng nhập thành công
        window.location.href = 'index.html';
    } else {
        alert("Tên người dùng hoặc mật khẩu không hợp lệ!");
    }
};

//Đăng xuất
function logoutUser() {
    //Xóa dữ liệu người dùng khỏi localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.setItem('isLoggedIn', 'false');
    alert('Đăng xuất thành công!');
    //Chuyển hướng người dùng đến trang chủ
    window.location.href = 'index.html';
}


//Xử lí trạng thái đăng nhập
function authState() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginButton = document.querySelector('.login');
    const registerButton = document.querySelector('.register');
    const logoutButton = document.querySelector('.logout');

    if (isLoggedIn === 'true') {
        //Nếu người dùng đã đăng nhập, ẩn nút Đăng nhập/Đăng ký và hiện nút Đăng xuất
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        logoutButton.style.display = 'block';
    } else {
        //Nếu người dùng chưa đăng nhập, hiện nút Đăng nhập/Đăng ký và ẩn nút Đăng xuất
        loginButton.style.display = 'block';
        registerButton.style.display = 'block';
        logoutButton.style.display = 'none';
    }
}

authState();