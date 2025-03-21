import React from "react";
class ChildComponent extends React.Component {
  state = {
    isShow: false,
  };
  handleDelete = (job) => {
    this.props.deleteJob(job);
  };
  handleShowHide = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    let { arrJob } = this.props;
    let { isShow } = this.state;
    return (
      <>
        {isShow === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {arrJob.map((item, index) => {
                return (
                  <>
                    <div key={item.id}>
                      {item.title} - {item.salary}{" "}
                      <span onClick={() => this.handleDelete(item)}>x</span>
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;
