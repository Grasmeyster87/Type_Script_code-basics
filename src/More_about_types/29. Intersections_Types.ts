// Присвоение значения
// Реализуйте объект по описанному типу Form. Поле name.value должно проходить валидацию, а поле age — нет.
type Form = {
    age: {
        value: number;
        validator: (val: number) => boolean;
    };
    name: {
        value: string;
        validator: (val: string) => boolean;
    };
};

const form: Form = {
    // BEGIN (write your solution here)
    age: {
        value: 12,
        validator: (val) => false,
    },
    name: {
        value: 'asb',
        validator: (val) => true,
    },
    // END
};
