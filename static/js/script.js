// Fonction pour changer la langue
function changeLanguage() {
    const selectedLang = document.getElementById("language-select").value;
    const labels = translations[selectedLang].labels;

    // Texte des instructions
    document.getElementById("instructions").innerText = translations[selectedLang].instructions;

    // Changer les titres dynamiquement
    Object.entries({
        "label-searchBy": labels.searchBy,
        "label-supplier-statut": labels.status,
        "label-dunsNumber": labels.dunsNumber,
        "label-supplierName": labels.supplierName,
        "label-businessId": labels.businessId,
        "label-emailWebsite": labels.emailWebsite,
        "label-phoneNumber": labels.phoneNumber,
        "label-country": labels.country,
        "results-title" : labels.resultsTitle,
    }).forEach(([id, text]) => document.getElementById(id).innerText = text);
    
}

function updateFields() {
    const searchBy = document.getElementById("searchBy").value;
    const dynamicFields = document.getElementById("dynamic-fields");
    dynamicFields.innerHTML = fields[searchBy];
    document.getElementById("error-message").style.display = "none";

    // Effacer les messages d'erreur lors du changement
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none";
    errorMessage.innerText = "";
}

function handleSubmit(event) {
    event.preventDefault();

    const searchBy = document.getElementById("searchBy").value;
    const errorMessage = document.getElementById("error-message");

    const data = {
        search_by: searchBy,
        duns_number: document.getElementById("dunsNumber")?.value,
        supplier_name: document.getElementById("supplierName")?.value,
        business_id: document.getElementById("businessId")?.value,
        country: document.getElementById("country")?.value,
    };

    // Validation côté client
    let errors = [];
    if (searchBy === "duns_number" && (!data.duns_number || data.duns_number.length !== 9)) {
        errors.push("DUNS Number must be exactly 9 characters.");
    } else if (searchBy === "supplier_name") {
        if (!data.supplier_name || !/[A-Za-z]/.test(data.supplier_name) || !/\d/.test(data.supplier_name)) {
            errors.push("Supplier Name must contain letters and digits.");
        }
        if (!data.country) {
            errors.push("Country is required.");
        }
    }

    if (errors.length > 0) {
        errorMessage.style.display = "block";
        errorMessage.innerText = errors.join("\n");
        return;
    }

    errorMessage.style.display = "none";

    // Simuler des résultats (ajouter DUNS, Business ID, etc.)
    const results = document.getElementById("results");
    results.style.display = "block";
    document.getElementById("resultDuns").value = data.duns_number || "123456789";
    document.getElementById("resultBusinessId").value = data.business_id || "987654321";
    document.getElementById("resultSupplierName").value = data.supplier_name || "Example Supplier";
    document.getElementById("resultCountry").value = data.country || "Example Country";

}

// --- Handle Search Button ---
async function handleSearch() {
    const searchBy = document.getElementById("searchBy").value;
    const dynamicInputs = document.querySelectorAll("#dynamic-fields input");

    let data = { searchBy };
    dynamicInputs.forEach(input => {
        data[input.id] = input.value;
    });
    
    // Envoi au backend via fetch
    await fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

// Example of result data
const resultData = [
    {
        supplier: "HANNAH L HAKIM INVESTMENTS LLC",
        dunsNumber: "023182453",
        street: "11275 US Highway 98 W Box 425",
        city: "Miramar Beach",
        state: "FL",
        country: "United States",
        postalCode: "325506954",
        locationType: "Single Location",
    },
];

// Function to populate the table
function populateResultsTable(data) {
    const resultsBody = document.getElementById("results-body");
    resultsBody.innerHTML = ""; // Clear any existing rows

    data.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="radio" name="select-supplier" value="${index}" /></td>
            <td>${item.supplier}</td>
            <td>${item.dunsNumber}</td>
            <td>${item.street}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.country}</td>
            <td>${item.postalCode}</td>
            <td>${item.locationType}</td>
        `;

        resultsBody.appendChild(row);
    });
}

// Populate the table on page load
document.addEventListener("DOMContentLoaded", () => {
    populateResultsTable(resultData);
});

document.getElementById("next-btn").addEventListener("click", () => {
    window.location.href = "/form"; // Redirige vers le formulaire
});
