import React from "react";
class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  changetitle = (event) => {
    this.setState({ title: event.target.value });
  };
  changeLastName = (event) => {
    this.setState({ salary: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Not match data!");
      return;
    }
    this.props.addJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Job's textitle:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.changetitle(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.changeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            onClick={(event) => this.handleSubmit(event)}
            value="Submit"
          />
        </form>
      </>
    );
  }
}
export default AddComponent;
