// Тип: { firstName: string, pointsCount: number }
const user = {
    firstName: 'Mike',
    pointsCount: 1000,
  };

  // Чтобы принять такой объект в функцию как параметр, нужно указать его структуру в описании функции:

// Свойства в описании типа разделяются через запятую (,)

function doSomething(user: { firstName: string, pointsCount: number }) {
  // ...
}
  
doSomething({ firstName: 'Alice', pointsCount: 2000 });
doSomething({ firstName: 'Bob', pointsCount: 1800 });

// firstName может быть undefined
// pointsCount может быть null
function doSomething1(user: { firstName?: string, pointsCount: number | null }) {
    // ...
  }

  function isComplete (arrayname: {name:string, lessons:string []}):boolean {
    if(arrayname.lessons.length >= 4){
        return true;
    }else {
        return false;
    }
  }

  // Определите тип исходя из структуры объекта
  const course = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
  };
  isComplete(course); // false

  /*
  function isComplete(course: { name: string, lessons: string[] }): boolean {
  return course.lessons.length >= 4;
}
  */