export default {
    data() {
        return {
            localFormData: new FormData()
        }
    },
    computed: {
        prettyModel() {
            return this.prettyJSON(this.model);
        }
    },
    methods: {
        prettyJSON(json) {
            if (json) {
                json = JSON.stringify(json, null, 4);
                json = json
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
                    let cls = "number";
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = "key";
                        } else {
                            cls = "string";
                        }
                    } else if (/true|false/.test(match)) {
                        cls = "boolean";
                    } else if (/null/.test(match)) {
                        cls = "null";
                    }
                    return "<span class='" + cls + "'>" + match + "</span>";
                });
            }
        },
        convertModelToFormData(model, form, namespace = '', is_edit = false) {
            let formData = this.localFormData = form || new FormData();
            // this.localFormData = formData;
            let formKey;
            for (let propertyName in model) {
                if (!model.hasOwnProperty(propertyName) || !model[propertyName]) continue;
                let formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;
                if (model[propertyName] instanceof Date)
                    formData.append(formKey, model[propertyName].toISOString());
                else if (model[propertyName] instanceof Array) {
                    model[propertyName].forEach((element, index) => {
                        const tempFormKey = `${formKey}[${index}]`;
                        this.convertModelToFormData(element, formData, tempFormKey);
                    });
                } else if (typeof model[propertyName] === 'object' && !(model[propertyName] instanceof File))
                    this.convertModelToFormData(model[propertyName], formData, formKey);
                else if (model[propertyName] instanceof File)
                    formData.append(formKey, model[propertyName]);
                else
                    formData.append(formKey, model[propertyName].toString());
            }
            if (is_edit)
                formData.append("_method", "PUT");

            return formData;
        },
        appendFormData(name, value) {
            this.localFormData.append(name, value)
        },
        removeFormDataItem(name) {
            this.localFormData.delete(name);
        },
        resetFromData() {
            this.localFormData = new FormData();
        },
        $tn(key = '', default_value = '') {
            return this.$te(key) ? this.$t(key) : default_value;
        }
    }
};

