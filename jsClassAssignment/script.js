class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }


    generateForm() {
        let html = `<form id="myForm">`;

        this.fields.forEach(f => {
            html += `
        <label>${f.label}</label><br>
        <input type="${f.type}" name="${f.label}" /><br><br>`;
        });

        html += `<button type="button" onclick="getForm()">Submit</button>`;
        html += `</form>`;

        document.getElementById("form-container").innerHTML = html;
    }


    getFormData() {
        const form = document.getElementById("myForm");
        const data = {};

        this.fields.forEach(f => {
            data[f.label] = form[f.label].value;
        });

        return data;
    }
}


const builder = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
]);

builder.generateForm();

function getForm() {
    const values = builder.getFormData();
    console.log(values);

    alert("Form submitted! Check console.");
}
