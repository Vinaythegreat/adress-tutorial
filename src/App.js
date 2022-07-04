import { useState } from "react";
import "./styles.css";

export default function App() {
  const [addresses, setAddresses] = useState([
    { id: 1, street: "street 1 ", city: "city", isEditing: false },
    { id: 2, street: "street 2 ", city: "city 2", isEditing: false }
  ]);
  const editAddress = (e, id) => {
    let edittedAddress = addresses[id - 1];
    edittedAddress = { ...edittedAddress, isEditing: true };
    console.log(edittedAddress);
    setAddresses((prevState) => [...prevState, edittedAddress]);
  };

  const onSubmit = (e) => {
    console.log(e);
    // setAddresses(...addresses, edittedAddress);
  };

  console.log(addresses);
  return (
    <div className="App">
      {addresses.map((address) => {
        return !address.isEditing ? (
          <div key={address.id}>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <button
              onClick={(e) => {
                editAddress(e, address.id);
              }}
            >
              Edit
            </button>
          </div>
        ) : (
          <div>
            <form onSubmit={onSubmit}>
              <p>street</p>
              <input type="text" value={address.id} hidden />
              <input label="Street" type="text" value={address.street} />
              <input label="City" type="text" value={address.city} />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
