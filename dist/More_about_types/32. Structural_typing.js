var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["Loading"] = "Loading";
    LoadingStatus["Success"] = "Success";
    LoadingStatus["Error"] = "Error";
})(LoadingStatus || (LoadingStatus = {}));
var handleData = function (dataState) {
    switch (dataState.status) {
        case LoadingStatus.Loading:
            return 'loading...';
        case LoadingStatus.Success:
            return String(dataState.data);
        case LoadingStatus.Error:
            return dataState.error.message;
        default:
            return 'unknown';
    }
};
var loading = { status: LoadingStatus.Loading };
console.log(handleData(loading));
var error = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error));
var success = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success));
//# sourceMappingURL=32.%20Structural_typing.js.map