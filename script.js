document.getElementById("loadTable").addEventListener("click", loadXML);

function loadXML() {
    fetch('data/artisticDevelopment.xml')
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");
            createTable(xmlDoc);
        })
        .catch(error => console.error("Error loading XML:", error));
}

function createTable(xmlDoc) {
    const tableContainer = document.getElementById("tableContainer");
    const table = document.createElement("table");
    const headerRow = table.insertRow();

    // Assuming you have a predefined structure of your XML
    const headers = ["Protocol Name", "Description", "Parameter Name", "Parameter Value"];
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    const protocols = xmlDoc.getElementsByTagName("protocol");
    Array.from(protocols).forEach(protocol => {
        const name = protocol.getElementsByTagName("name")[0].textContent;
        const description = protocol.getElementsByTagName("description")[0].textContent;
        const parameters = protocol.getElementsByTagName("parameter");

        Array.from(parameters).forEach(parameter => {
            const row = table.insertRow();
            const paramName = parameter.getElementsByTagName("name")[0].textContent;
            const paramValue = parameter.getElementsByTagName("value")[0].textContent;

            row.insertCell().textContent = name;
            row.insertCell().textContent = description;
            row.insertCell().textContent = paramName;
            row.insertCell().textContent = paramValue;
        });
    });

    tableContainer.appendChild(table);
}
