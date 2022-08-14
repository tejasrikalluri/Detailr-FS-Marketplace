function isISODate(val) {
    if (/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})[+-](\d{2})\:(\d{2})/.test(val)) {
        return true;
    }
    if (/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})[Z]/.test(val)) {
        return true;
    }
}

function formatArrayString(val) {
    return val.join(', ');
}

function formatDate(val) {
    return moment(val).format("MMM Do YYYY");
}

//formats custom fields
function formatCustomFields(values, cust_fields) {
    console.log(values)
    console.log(cust_fields)
    let custArr = [];
    $.each(cust_fields, function (key, val) {
        let value;
        console.log(values[val])
        value = (values[val] && values[val] != " ") ? values[val] : "N/A";
        custArr.push(
            '<div><span class="muted ucwords" style="color:#475867;margin-right: 2%;">' +
            val.replace(/\_/g, " ").charAt(0).toUpperCase() + val.replace(/\_/g, " ").slice(1) +
            "</span>",
            ": ",
            '<span class="muted ucwords">' +
            xss_test(value) +
            "</span>",
            "<br/></div>"
        );
    });
    /* $.each(values, function (key, val) {
        let newVal = 'N/A';
        if (isValNotEmpty(val)) {
            newVal = val;
            if (isISODate(val)) {
                newVal = formatDate(val);
            }
        }
        custArr.push(
            '<span class="muted ucwords">' + key + '</span>',
            ': ',
            xss_test(newVal),
            '<br/>'
        );
    }); */
    return custArr.join('');
}

function xss_test(name) {
    return $("<span></span>").text(name)[0].innerHTML;
}

function isValNotEmpty(val) {
    return !!val && val.toString().trim().length > 0;
}