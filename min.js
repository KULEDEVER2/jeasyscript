// =========================
// JeasyScript v2.0
// Lightweight JavaScript Utility Framework
// =========================

// ---------- CORE ----------
const $ = (id) => document.getElementById(id);
const qs = (q) => document.querySelector(q);
const qsa = (q) => document.querySelectorAll(q);

// ---------- ELEMENT CONTROL ----------
const hide = (id) => $(id).style.display = "none";
const show = (id) => $(id).style.display = "block";

const toggle = (id) => {
    const el = $(id);
    el.style.display = (el.style.display === "none") ? "block" : "none";
};

const remove = (id) => $(id).remove();
const clear = (id) => $(id).innerHTML = "";

const exists = (id) => !!$(id);

// ---------- EVENTS ----------
const click = (id, fn) => $(id).addEventListener("click", fn);

const dblclick = (id, fn) => $(id).addEventListener("dblclick", fn);

const hover = (id, inFn, outFn) => {
    const el = $(id);
    el.addEventListener("mouseover", inFn);
    el.addEventListener("mouseout", outFn);
};

const input = (id, fn) => $(id).addEventListener("input", fn);

const keydown = (fn) => document.addEventListener("keydown", fn);
const keyup = (fn) => document.addEventListener("keyup", fn);

const scroll = (fn) => window.addEventListener("scroll", fn);
const resize = (fn) => window.addEventListener("resize", fn);

// ---------- STYLE ----------
const css = (id, styles) => Object.assign($(id).style, styles);

const addClass = (id, c) => $(id).classList.add(c);
const removeClass = (id, c) => $(id).classList.remove(c);
const toggleClass = (id, c) => $(id).classList.toggle(c);

const bg = (id, c) => $(id).style.background = c;
const color = (id, c) => $(id).style.color = c;
const fontSize = (id, v) => $(id).style.fontSize = v;
const opacity = (id, v) => $(id).style.opacity = v;

// ---------- TEXT / HTML ----------
const text = (id, v) => $(id).innerText = v;
const html = (id, v) => $(id).innerHTML = v;

const appendText = (id, v) => $(id).innerText += v;
const appendHTML = (id, v) => $(id).innerHTML += v;

const upper = (id) => text(id, $(id).innerText.toUpperCase());
const lower = (id) => text(id, $(id).innerText.toLowerCase());

// ---------- VALUES ----------
const val = (id) => $(id).value;
const setVal = (id, v) => $(id).value = v;

const clearVal = (id) => $(id).value = "";
const numVal = (id) => Number($(id).value);

const isEmpty = (id) => val(id) === "";

// ---------- MEDIA / VIDEO ----------
const play = (id) => $(id).play();
const pause = (id) => $(id).pause();

const stop = (id) => {
    const v = $(id);
    v.pause();
    v.currentTime = 0;
};

const fullscreen = (id) => $(id).requestFullscreen();

const mute = (id) => $(id).muted = true;
const unmute = (id) => $(id).muted = false;

// ---------- BATCH ----------
const each = (arr, fn) => arr.forEach(fn);

const hideAll = (...ids) => ids.forEach(hide);
const showAll = (...ids) => ids.forEach(show);
const clickAll = (ids, fn) => ids.forEach(id => click(id, fn));

const addClassAll = (ids, c) => ids.forEach(id => addClass(id, c));

// ---------- LOGIC / HELPERS ----------
const is = (id, attr) => $(id).getAttribute(attr);
const set = (id, attr, v) => $(id).setAttribute(attr, v);

const hasClass = (id, c) => $(id).classList.contains(c);

const wait = (ms) => new Promise(r => setTimeout(r, ms));

const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

// ---------- DEBUG ----------
const log = (...a) => console.log(...a);
const warn = (...a) => console.warn(...a);
const err = (...a) => console.error(...a);

const time = (l) => console.time(l);
const timeEnd = (l) => console.timeEnd(l);

// ---------- STORAGE ----------
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

const load = (k) => {
    const d = localStorage.getItem(k);
    return d ? JSON.parse(d) : null;
};

const removeStore = (k) => localStorage.removeItem(k);
const clearStore = () => localStorage.clear();

const existsStore = (k) => localStorage.getItem(k) !== null;

// ---------- ANIMATIONS ----------
const fadeIn = (id, t = 500) => {
    const el = $(id);
    el.style.transition = `opacity ${t}ms`;
    el.style.opacity = 1;
};

const fadeOut = (id, t = 500) => {
    const el = $(id);
    el.style.transition = `opacity ${t}ms`;
    el.style.opacity = 0;
};

const move = (id, x, y, t = 300) => {
    const el = $(id);
    el.style.transition = `transform ${t}ms`;
    el.style.transform = `translate(${x}px, ${y}px)`;
};

const scale = (id, s, t = 300) => {
    const el = $(id);
    el.style.transition = `transform ${t}ms`;
    el.style.transform = `scale(${s})`;
};

const rotate = (id, d, t = 300) => {
    const el = $(id);
    el.style.transition = `transform ${t}ms`;
    el.style.transform = `rotate(${d}deg)`;
};

// ---------- NAVIGATION ----------
const go = (url) => window.location.href = url;

const openTab = (url) => window.open(url, "_blank");

const back = () => window.history.back();

const forward = () => window.history.forward();

const reload = () => window.location.reload();

const setHash = (h) => window.location.hash = h;

const getHash = () => window.location.hash.replace("#", "");