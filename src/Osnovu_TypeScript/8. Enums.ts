enum OrderStatus {
    Created,
    Paid,
    Shipped,
    Delivered,
}

const order = {
    items: 3,
    status1: OrderStatus.Created,
};
enum CardinalDirection {
    North,
    South,
    East,
    West,
}

const direction = CardinalDirection.North;

const statuses = Object.keys(OrderStatus);
//console.log(statuses); // ['0', '1', '2', '3', 'Created', 'Paid', 'Shipped', 'Delivered']

//console.log(OrderStatus); // =>
//   'Created': '0',
//   'Paid': '1',
//   'Shipped': '2',
//   'Delivered': '3'
// }

enum ModalStatus {
    Opened,
    Closed,
}
function buildModal(text1: string, status1: ModalStatus) {
    return {
        text: text1,
        status: status1,
    };
}
const modal = buildModal('hexlet forever', ModalStatus.Opened);
console.log(modal);
// { text: 'hexlet forever', status: ModalStatus.Opened }
