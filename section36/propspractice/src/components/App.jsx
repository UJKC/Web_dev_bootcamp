import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function CreateCard(contacts) {
  return <Card
    name={contacts.name}
    imgURL={contacts.imgURL}
    phone={contacts.phone}
    email={contacts.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
