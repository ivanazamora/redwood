import "./styles.css";
import React, { Component } from "react";
import { useState } from "react";
import { db } from "./fbconfig";
import { collection, addDoc } from "firebase/firestore";

// Create a new component to display all the trips entered by a user.
// It should display the names of the trip, the travelled distance,
// and the saved CO2 for each individual trip.

class SubmitTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitName: "",
      submitUnit: "km",
      submitDist: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

async handleSubmit(e) {
    e.preventDefault();
    await addDoc(collection(db, "pallets"), {
      submitName,
      submitUnit,
      createdAt: new Date(),
      submitDist,
    });
    this.setState({submitName: "", submitUnit: "km", submitDist: 0});
  };
  
  render () {
      return(
        <div>
        <form onSubmit={handleSubmit}>
            <h3>Add a Pallet for Shipping</h3>
            <div>
            {/*
            <input
                type="text"
                placeholder="Describe the shipping contents..."
                value={submitName}
                onChange={(e) => this.setState({submitName: e.target.value})}
            />
            <br />
            <input
                type="text"
                placeholder="Enter pallet weight (in KG)..."
                value={submitDist}
                onChange={(e) => this.setState({submitDist: e.target.value})}
            />
            */}
            </div>
            <div>
            <button>Add Pallet to shipment</button>
            </div>
        </form>
        </div>
      );
  }
}

export default SubmitTrip;
