import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    arrJob: [
      { id: 1, title: "Developer", salary: "40000" },
      { id: 2, title: "Cooker", salary: "20000" },
    ],
  };
  addJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };
  deleteJob = (job) => {
    this.setState({
      arrJob: this.state.arrJob.filter((item) => item.id !== job.id),
    });
  };
  render() {
    return (
      <>
        <AddComponent addJob={this.addJob} />
        <ChildComponent arrJob={this.state.arrJob} deleteJob={this.deleteJob} />
      </>
    );
  }
}
export default MyComponent;
