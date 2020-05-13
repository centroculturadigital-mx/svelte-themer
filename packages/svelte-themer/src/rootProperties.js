const getRootProperties = (object, prefix) => {

    let properties = []

    let varString

    if (!prefix) {
        prefix = `--theme`
    }

    varString = prefix

    for (let [key, value] of Object.entries(object)) {

        varString = `${varString}-${key}`

        if (typeof value === "object") {
            properties = [...properties, ...getRootProperties(value, varString)]
        } else {
            properties.push([
                varString, value
            ])
        }

        varString = prefix

    }

    return properties

}

const setRootProperties = (properties) => {


    for (const property of properties) {

        document.documentElement.style.setProperty(property[0], property[1]);

    }

    return

}
const setRootTypographies = (families) => {

    console.log("PROPIEDADES", families.primary);

    for (const fam in families) {
        console.log("FOR:::", fam);
    }

    return

}


const rootProperties = {
    getRootProperties,
    setRootProperties,
    setRootTypographies
}

module.exports = rootProperties