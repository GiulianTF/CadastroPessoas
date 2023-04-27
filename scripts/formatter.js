function formatterDMY(data, filter) {
    return filter("date")(data, "dd-MM-yyyy");

}

function formatterYMD(data, filter) {
    return filter("date")(data, "yyyy-MM-dd");

}