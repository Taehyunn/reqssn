// 이해를 돕기위한 허접한 시연입니다. 전부 삭제해주세요. + CSS 마지막 줄에 표시해둔 단락도 삭제해야합니다.

const InstShowBtn = document.querySelector(".InstShowBtn");
const TargetShowBtn = document.querySelector(".TargetShowBtn");
const PeriodShowBtn = document.querySelector(".PeriodShowBtn");
const MoveToDirect = document.querySelector(".MoveToDirect");
const btn_back = document.querySelector(".btn_back");

const BottomLayout = document.querySelector(".bottom_layer");
// const ModalCloseBtn = document.querySelector(".ModalCloseBtn");
const blackOn = document.querySelector(".blackOn");

const InstModal = document.querySelector(".institution");
const TargetModal = document.querySelector(".target");
const PeriodModal = document.querySelector(".period");
const directModal = document.querySelector(".direct_selection");

document.querySelectorAll(".ModalCloseBtn").forEach((CB) => {
  CB.addEventListener("click", () => {
    blackOn.style.display = "none";
    InstModal.style.display = "none";
    TargetModal.style.display = "none";
    PeriodModal.style.display = "none";
    directModal.style.display = "none";
    BottomLayout.style.display = "block";
    document.body.classList.remove("stop-scroll");
  });
});

blackOn.addEventListener("click", function () {
  blackOn.style.display = "none";
  InstModal.style.display = "none";
  TargetModal.style.display = "none";
  PeriodModal.style.display = "none";
  directModal.style.display = "none";
  BottomLayout.style.display = "block";
  document.body.classList.remove("stop-scroll");
});
InstShowBtn.addEventListener("click", function () {
  blackOn.style.display = "block";
  InstModal.style.display = "block";
  BottomLayout.style.display = "none";
  document.body.classList.add("stop-scroll");
});
TargetShowBtn.addEventListener("click", function () {
  blackOn.style.display = "block";
  TargetModal.style.display = "block";
  BottomLayout.style.display = "none";
  document.body.classList.add("stop-scroll");
});
PeriodShowBtn.addEventListener("click", function () {
  blackOn.style.display = "block";
  PeriodModal.style.display = "block";
  BottomLayout.style.display = "none";
  document.body.classList.add("stop-scroll");
});
MoveToDirect.addEventListener("click", function () {
  blackOn.style.display = "block";
  directModal.style.display = "block";
  PeriodModal.style.display = "none";
  BottomLayout.style.display = "none";
  document.body.classList.add("stop-scroll");
});
btn_back.addEventListener("click", function () {
  PeriodModal.style.display = "block";
  blackOn.style.display = "block";
  directModal.style.display = "none";
  BottomLayout.style.display = "none";
  document.body.classList.add("stop-scroll");
});

const myself = document.querySelector(".myself");
const family = document.querySelector(".family");
const NameId1 = document.querySelector(".NameId1");
const NameId2 = document.querySelector(".NameId2");

myself.addEventListener("click", function () {
  NameId1.classList.add("on");
});
family.addEventListener("click", function () {
  NameId1.classList.remove("on");
});
family.addEventListener("click", function () {
  NameId2.classList.add("on");
});
myself.addEventListener("click", function () {
  NameId2.classList.remove("on");
});

myself.addEventListener("click", function () {
  blackOn.style.display = "none";
  TargetModal.style.display = "none";
  BottomLayout.style.display = "block";
  document.body.classList.remove("stop-scroll");
});
family.addEventListener("click", function () {
  blackOn.style.display = "none";
  TargetModal.style.display = "none";
  BottomLayout.style.display = "block";
  document.body.classList.remove("stop-scroll");
});

document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelector(".selection_issue");
  const DefaultIssue = document.querySelector(".DefaultIssue");
  const SelectIssue = document.querySelector(".SelectIssue");

  SelectIssue.addEventListener("click", () => {
    accordion.classList.add("on");
  });
  DefaultIssue.addEventListener("click", () => {
    accordion.classList.remove("on");
  });
});
