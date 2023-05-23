function elementBuilder(elementData, container) {
  const elementCard = document.createElement("div");
  elementCard.className = `elementcard card${elementData.atomicNumber} `;
  elementCard.id = `${removeWhiteSpace(elementData.groupBlock)}`;
  elementCard.style.backgroundColor = `var(${getColor(
    elementData.groupBlock
  )})`;
  elementCard.innerHTML = `   
        <div class="elementcard-topRow">
          <p class="elementcard-atomNo">${elementData.atomicNumber}</p>
          <p class="elementcard-atomMass">${reduceMass(
            elementData.atomicMass
          )}</p>
        </div>
        <h2 class="elementcard-elementSymbol">${elementData.symbol}</h2>
        <p class="elementcard-elementName">${elementData.name}</p>`;
  container.appendChild(elementCard);
}

//remove white space from class name for filter function
function removeWhiteSpace(param) {
  param = param.replace(/\s+/g, "");
  return param;
}

//knocks off some numbers -- I'm sure they cant be that important!
function reduceMass(atomicMass) {
  let reduced = 0;
  let toStringReduced = "";
  let toString = typeToString(atomicMass);

  function typeToString(param) {
    let paramOut = "";
    if (typeof param == "string") {
      paramOut = param.toString();
      return paramOut;
    }
    if (typeof param == "object") {
      paramOut = param[0].toString();
      return paramOut;
    }
  }
  // console.log(toString);

  for (let i = 0; i <= 4; i++) {
    toStringReduced += toString[i];
  }
  reduced = Number(toStringReduced);
  return reduced;
}

//decide background depending on groupBlock JSON data
function getColor(elementType) {
  if (elementType == "nonmetal") {
    return "--color-reactiveNonmetals";
  }
  if (elementType == "noble gas") {
    return "--color-nobelGases";
  }
  if (elementType == "alkali metal") {
    return "--color-alkali";
  }
  if (elementType == "alkaline earth metal") {
    return "--color-alkalineEarthMetals";
  }
  if (elementType == "metalloid") {
    return "--color-metaloids";
  }
  if (elementType == "halogen") {
    return "--color-halogens";
  }
  if (elementType == "transition metal") {
    return "--color-transitonMetals";
  }
  if (elementType == "metal") {
    return "--color-postTran";
  }
  if (elementType == "post-transition metal") {
    return "--color-postTran";
  }
  if (elementType == "lanthanoid") {
    return "--color-lathanides";
  }
  if (elementType == "actinoid") {
    return "--color-actines";
  }
}

function infoBuilder(elementData, container, index) {
  const infoCard = document.createElement("div");
  infoCard.className = `moreInfo-Container slidein`;
  infoCard.id = `moreInfo-Container`;
  infoCard.style.backgroundColor = `var(${getColor(
    elementData[index].groupBlock
  )})`;
  infoCard.innerHTML = `   
    <div class="elementcard moreInfo-elementcard" id="moreInfo-elementcard">
     <div class="elementcard-topRow">
            <p class="elementcard-atomNo">${elementData[index].atomicNumber}</p>
              <p class="elementcard-atomMass">${reduceMass(
                elementData[index].atomicMass
              )}</p>
          </div>
          <h2 class="elementcard-elementSymbol">${
            elementData[index].symbol
          }</h2>
          <p class="elementcard-elementName">${elementData[index].name}</p>
    </div>
  
    <div class="info-container">
      <h1 class="info-element-name">${elementData[index].name}</h1>
      <p class="info-element-p">atomicMass : ${
        elementData[index].atomicMass
      }</p>
      <p class="info-element-p">atomicNumber : ${
        elementData[index].atomicNumber
      }</p>
      <p class="info-element-p">atomicRadius : ${
        elementData[index].atomicRadius
      }</p>
      <p class="info-element-p">boilingPoint : ${
        elementData[index].boilingPoint
      }</p>
      <p class="info-element-p">bondingType : ${
        elementData[index].bondingType
      }</p>
      <p class="info-element-p">density : ${elementData[index].density}</p>
      <p class="info-element-p">groupBlock : ${
        elementData[index].groupBlock
      }</p>
      <p class="info-element-p">meltingPoint : ${
        elementData[index].meltingPoint
      }</p>
      <p class="info-element-p">standardState : ${
        elementData[index].standardState
      }</p>
    </div>
    <button class="closeInfoButton" id="closeButton">Close X</button>
  `;
  container.appendChild(infoCard);
  const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", () => {
    infoCard.remove();
    const children1 = gridContainer1.children;
    const children2 = gridContainer2.children;
    for (const child of children1) {
      child.style.filter = "grayscale(0)";
      child.style.transition = "0.5s";
      child.style.pointerEvents = "unset";
    }
    for (const child of children2) {
      child.style.filter = "grayscale(0)";
      child.style.transition = "0.5s";
      child.style.pointerEvents = "unset";
    }
  });
}

export { elementBuilder, infoBuilder };
