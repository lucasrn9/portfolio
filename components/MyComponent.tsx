import { useState } from "react";

const MyComponent = () => {
  const [objectsArray, setObjectsArray] = useState([
    { name: "first", active: false },
    { name: "second", active: false },
    { name: "third", active: false },
  ]);

  //   const toggler = (objectToBeToggled: number) => {
  //     setObjectsArray((prevState) =>
  //       prevState.map((obj, index) => {
  //         if (index === objectToBeToggled) {
  //           return { ...obj, active: !obj.active };
  //         }
  //         return obj;
  //       })
  //     );
  //   };

  //   const toggler = (objectToBeToggled: number) => {
  //     let newState = [];
  //     newState = [...objectsArray];
  //     newState[objectToBeToggled].active = !newState[objectToBeToggled].active;
  //     setObjectsArray(newState);
  //   };

  const toggler = (objectToBeToggled: number) => {
    setObjectsArray((prevState) => {
      let newState = [];
      newState = [...prevState];
      newState[objectToBeToggled].active = !newState[objectToBeToggled].active;
      return newState;
    });
  };

  return (
    <div>
      {objectsArray.map((obj, index) => (
        <div
          className={obj.active ? "active" : "inactive"}
          onClick={() => toggler(index)}
          key={obj.name}
        >
          {obj.name}
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
