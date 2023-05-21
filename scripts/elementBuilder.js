function elementBuilder(elementData, container) {
  // for (let i = 0; i < elementData.length; i++) {
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
  // }
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

export { elementBuilder };

//OBJECT LAYOUT

// atomicNumber;
// symbol;
// name;
// atomicMass;
// electronicConfiguration;
// electronegativity;
// atomicRadius;
// ionRadius;
// vanDerWaalsRadius;
// ionizationEnergy;
// electronAffinity;
// oxidationStates;
// standardState;
// bondingType;
// meltingPoint;
// boilingPoint;
// density;
// groupBlock;
// yearDiscovered;
// block;
// cpkHexColor;
// period;
// group;
