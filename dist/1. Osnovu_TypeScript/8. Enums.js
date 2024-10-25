var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Created"] = 0] = "Created";
    OrderStatus[OrderStatus["Paid"] = 1] = "Paid";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
var order = {
    items: 3,
    status1: OrderStatus.Created,
};
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 0] = "North";
    CardinalDirection[CardinalDirection["South"] = 1] = "South";
    CardinalDirection[CardinalDirection["East"] = 2] = "East";
    CardinalDirection[CardinalDirection["West"] = 3] = "West";
})(CardinalDirection || (CardinalDirection = {}));
var direction = CardinalDirection.North;
var statuses = Object.keys(OrderStatus);
var ModalStatus;
(function (ModalStatus) {
    ModalStatus[ModalStatus["Opened"] = 0] = "Opened";
    ModalStatus[ModalStatus["Closed"] = 1] = "Closed";
})(ModalStatus || (ModalStatus = {}));
function buildModal(text1, status1) {
    return {
        text: text1,
        status: status1,
    };
}
var modal = buildModal('hexlet forever', ModalStatus.Opened);
console.log(modal);
//# sourceMappingURL=8.%20Enums.js.map