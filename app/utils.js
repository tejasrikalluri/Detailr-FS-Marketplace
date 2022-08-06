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
function formatCustomFields(values) {
    let custArr = [];
    $.each(values, function(key, val) {
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
    });
    return custArr.join('');
}

function xss_test(name) {
    return $("<span></span>").text(name)[0].innerHTML;
}

function isValNotEmpty(val) {
    return !!val && val.toString().trim().length > 0;
}