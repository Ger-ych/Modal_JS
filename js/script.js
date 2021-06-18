function modal_login() {
    let mute_bg = document.createElement("div");
    
    mute_bg.classList.add("mute-bg");
    setTimeout(function() {
        mute_bg.style.background = "rgba(0, 0, 0, 0.6)";
    }, 10);

    mute_bg.onclick = function(e) {
        if (e.target.classList.contains("mute-bg") || e.target.classList.contains("login-modal__cross")) {
            mute_bg.style.opacity = "0";           setTimeout(function() {
                mute_bg.remove();
            }, 500);
        }
    }

    document.body.append(mute_bg);

    let login_modal = document.createElement("div");
    login_modal.classList.add("login-modal");

    mute_bg.append(login_modal);

    let title = document.createElement("h2");
    title.textContent = "Заголовок";
    login_modal.append(title);

    let cross = document.createElement("i");
    cross.classList.add("fa");
    cross.classList.add("fa-times");
    cross.classList.add("login-modal__cross");
    login_modal.append(cross);
}
