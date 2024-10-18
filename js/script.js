window.onload = function () {
    let lis = document.getElementsByClassName("list-item");
    console.log(lis);
    for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        li.addEventListener("mouseover", function () {
            if (this.textContent.toLowerCase() == "contact us") {
                document.getElementsByClassName("aside-menu")[0].style.background = "#f4fc00";

            } else if (this.textContent.toLowerCase() == "faq") {
                document.getElementsByClassName("aside-menu")[0].style.background = "#ff27ff";

            } else if (this.textContent.toLowerCase() == "apps") {
                document.getElementsByClassName("aside-menu")[0].style.background = "#d492da";

            } else if (this.textContent.toLowerCase() == "games") {
                document.getElementsByClassName("aside-menu")[0].style.background = "#8080ff";

            }
        });

    }

    let itemCloseAside = document.getElementsByClassName("close-aside")[0];
    console.log(itemCloseAside);
    itemCloseAside.addEventListener("click", function () {
        document.getElementsByClassName("aside-menu")[0].className = " aside-menu close-aside-event";

    });

    let itemShowAside = document.getElementsByClassName("menu")[0];
    itemShowAside.addEventListener("click", function () {
        document.getElementsByClassName("aside-menu")[0].className = " aside-menu show-aside-event";

    });

    let wallpaper = document.getElementsByClassName("item")[0];
    wallpaper.addEventListener("click", function () {
        var win = window.open("https://play.google.com/store/apps/details?id=com.whitessmoke.wallpaperboomerang&hl=es&gl=US", '_blank');
        win.focus();

    });

    
    let youPerfectCat = document.getElementsByClassName("item")[1];
    youPerfectCat.addEventListener("click", function () {
        var win = window.open("https://play.google.com/store/apps/details?id=com.whitessmoke.wallpaperboomerang&hl=es&gl=US", '_blank');
        win.focus();

    });
}