const button = document.getElementById("button");

button.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const year = document.getElementById("year").value.trim();

    let url = "https://localhost:8080/";
    let params = [];

    // encodeURIComponent hata diya hai taaki space space hi rahe
    if (name) params.push("name=" + name); 
    if (year) params.push("year=" + year);

    if (params.length > 0) {
        url += "?" + params.join("&");
    }

    document.getElementById("url").textContent = url;
});