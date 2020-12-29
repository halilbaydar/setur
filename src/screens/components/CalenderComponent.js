import React, { Component } from "react";
import { Button, View, Text, Modal } from "react-native";
import CalendarList from "../calendar/CalendarList";

export default class CalendarExample extends Component {
  state = {
    selectedDate1: "",
    selectedDate2: "",

    selectedDate3: "",
    selectedDate4: "",

    selectedDate5: "",
    selectedDate6: "",

    selectedDate7: "",
    selectedDate8: "",

    selectedDate9: "",
    selectedDate10: "",

    visible0: false,
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          animationType={"slide"}
          visible={this.state.visible1}
          onRequestClose={() => {}}
        >
          <View style={{ height: 44 }} />
          <CalendarList
            containerStyle={{ flex: 1 }}
            minDate={"2016-5-23"}
            maxDate={"2020-6-6"}
            cancel={() => this.setState({ visible1: false })}
            confirm={(data) => {
              this.setState({
                selectedDate3: data[0],
                selectedDate4: data[1],
                visible1: false,
              });
            }}
          />
        </Modal>
      </View>
    );
  }
}
