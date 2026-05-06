// =========================
// JeasyScript v2.4
// Readable + short JavaScript utility library
// =========================

// ---------- CORE ----------
function getid(id) {
    return document.getElementById(id);
}

// ---------- ELEMENTS ----------
function hide(id) {
    getid(id).style.display = "none";
}

function show(id) {
    getid(id).style.display = "block";
}

function toggle(id) {
    var el = getid(id);
    el.style.display = (el.style.display === "none") ? "block" : "none";
}

function remove(id) {
    getid(id).remove();
}

function clear(id) {
    getid(id).innerHTML = "";
}

// ---------- EVENTS ----------
function click(id, fn) {
    getid(id).addEventListener("click", fn);
}

function dbl(id, fn) {
    getid(id).addEventListener("dblclick", fn);
}

function hover(id, on, off) {
    var el = getid(id);
    el.addEventListener("mouseover", on);
    el.addEventListener("mouseout", off);
}

function input(id, fn) {
    getid(id).addEventListener("input", fn);
}

function key(fn) {
    document.addEventListener("keydown", fn);
}

// ---------- STYLE ----------
function css(id, styles) {
    Object.assign(getid(id).style, styles);
}

function add(id, className) {
    getid(id).classList.add(className);
}

function rem(id, className) {
    getid(id).classList.remove(className);
}

function tog(id, className) {
    getid(id).classList.toggle(className);
}

// ---------- TEXT ----------
function text(id, value) {
    getid(id).innerText = value;
}

function html(id, value) {
    getid(id).innerHTML = value;
}

function addText(id, value) {
    getid(id).innerText += value;
}

// ---------- INPUT ----------
function val(id) {
    return getid(id).value;
}

function setVal(id, value) {
    getid(id).value = value;
}

function clearVal(id) {
    getid(id).value = "";
}

// ---------- MEDIA ----------
function play(id) {
    getid(id).play();
}

function pause(id) {
    getid(id).pause();
}

function stop(id) {
    var el = getid(id);
    el.pause();
    el.currentTime = 0;
}

// ---------- ANIMATIONS ----------
function fadeIn(id, t) {
    t = t || 500;
    var el = getid(id);
    el.style.transition = "opacity " + t + "ms";
    el.style.opacity = "1";
}

function fadeOut(id, t) {
    t = t || 500;
    var el = getid(id);
    el.style.transition = "opacity " + t + "ms";
    el.style.opacity = "0";
}

function move(id, x, y, t) {
    t = t || 300;
    var el = getid(id);
    el.style.transition = "transform " + t + "ms";
    el.style.transform = "translate(" + x + "px," + y + "px)";
}

function scale(id, s, t) {
    t = t || 300;
    var el = getid(id);
    el.style.transition = "transform " + t + "ms";
    el.style.transform = "scale(" + s + ")";
}

// ---------- NAVIGATION ----------
function go(url) {
    window.location.href = url;
}

function tab(url) {
    window.open(url, "_blank");
}

function back() {
    window.history.back();
}

function forward() {
    window.history.forward();
}

function reload() {
    window.location.reload();
}

// ---------- STORAGE ----------
function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
    var data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function del(key) {
    localStorage.removeItem(key);
}

function clearStore() {
    localStorage.clear();
}