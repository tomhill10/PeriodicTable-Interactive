import { fetchData } from "./fetchModule.js";
import { elementBuilder, infoBuilder } from "./elementBuilder.js";

let allElements = await fetchData("https://neelpatel05.pythonanywhere.com/");

const gridContainer1 = document.getElementById("gridContainer1");
const gridContainer2 = document.getElementById("gridContainer2");

for (let i = 0; i < allElements.length; i++) {
  let container;
  if (i >= 0 && i <= 56) {
    container = document.getElementById("gridContainer1");
    elementBuilder(allElements[i], container);
  }
  if (i > 56 && i < 71) {
    container = document.getElementById("gridContainer2");
    elementBuilder(allElements[i], container);
  }
  if (i >= 71 && i <= 88) {
    container = document.getElementById("gridContainer1");
    elementBuilder(allElements[i], container);
  }

  if (i > 88 && i < 103) {
    container = document.getElementById("gridContainer2");
    elementBuilder(allElements[i], container);
  }

  if (i >= 103 && i <= 118) {
    container = document.getElementById("gridContainer1");
    elementBuilder(allElements[i], container);
  }
}

//function to filter through the elements by type
const filterButton = document.getElementsByClassName("legend-row-wrapper");
for (const item of filterButton) {
  item.addEventListener("click", function () {
    const children1 = gridContainer1.children;
    const children2 = gridContainer2.children;
    let elementType = item.getAttribute("id");
    if (elementType == "all") {
      for (const child of children1) {
        let childId = child.getAttribute("id");
        if (childId != elementType && child.classList.contains("elementcard")) {
          child.style.filter = "unset";
          child.style.transition = "0.5s";
        }
      }
      for (const child of children2) {
        let childId = child.getAttribute("id");
        if (childId != elementType && child.classList.contains("elementcard")) {
          child.style.filter = "unset";
          child.style.transition = "0.5s";
        }
      }
    } else {
      for (const child of children1) {
        let childId = child.getAttribute("id");
        if (childId != elementType && child.classList.contains("elementcard")) {
          child.style.filter = "grayscale(1)";
          child.style.transition = "0.5s";
        }
        if (childId == elementType && child.classList.contains("elementcard")) {
          child.style.filter = "unset";
          child.style.transition = "0.5s";
        }
      }
      for (const child of children2) {
        let childId = child.getAttribute("id");
        if (childId != elementType && child.classList.contains("elementcard")) {
          child.style.filter = "grayscale(1)";
          child.style.transition = "0.5s";
        }
        if (childId == elementType && child.classList.contains("elementcard")) {
          child.style.filter = "unset";
          child.style.transition = "0.5s";
        }
      }
    }
  });
}

//parse element number into the infoBuilder
const elementCardClick = document.getElementsByClassName("elementcard");
const body = document.getElementById("body");
for (const eachEle of elementCardClick) {
  eachEle.addEventListener("click", function () {
    let atomNo = eachEle.getElementsByClassName("elementcard-atomNo");
    infoBuilder(allElements, body, atomNo[0].textContent - 1);
    const children1 = gridContainer1.children;
    const children2 = gridContainer2.children;
    for (const child of children1) {
      child.style.filter = "grayscale(1)";
      child.style.transition = "0.5s";
      child.style.pointerEvents = "none";
    }
    for (const child of children2) {
      child.style.filter = "grayscale(1)";
      child.style.transition = "0.5s";
      child.style.pointerEvents = "none";
    }
  });
}
