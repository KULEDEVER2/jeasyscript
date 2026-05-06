// =========================
// JeasyScript v1
// JavaScript made easy to read & write
// =========================

// ---------- CORE ----------
const $ = (id) => document.getElementById(id);

// ---------- ELEMENT CONTROL ----------
const hide = (id) => $(id).style.display = "none";

const show = (id) => $(id).style.display = "block";

const toggle = (id) => {
    const el = $(id);
    el.style.display = (el.style.display === "none") ? "block" : "none";
};

// ---------- EVENTS ----------
const click = (id, fn) => $(id).addEventListener("click", fn);

// ---------- TEXT ----------
const text = (id, value) => $(id).innerText = value;

// ---------- VALUE ----------
const val = (id) => $(id).value;
const setVal = (id, value) => $(id).value = value;

// ---------- STYLE ----------
const css = (id, styles) => {
    Object.assign($(id).style, styles);
};

// ---------- BATCH HELPERS ----------
const hideAll = (...ids) => ids.forEach(hide);
const showAll = (...ids) => ids.forEach(show);