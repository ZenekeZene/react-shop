import React from "react";
import _ from "lodash";
import styles from "../styles/clothing-sizes.module.css";

class ClothingSizes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sizesSelected: [
        {
          id: "small",
          name: "Small",
          checked: false
        },
        {
          id: "medium",
          name: "Medium",
          checked: false
        },
        {
          id: "large",
          name: "Large",
          checked: false
        }
      ]
    };
  }

  componentDidMount() {
    if (this.props.typeInput === "radio") {
      const sizesSelected = this.state.sizesSelected;
      sizesSelected[1].checked = true;
      this.setState({ sizesSelected });
    }
  }

  handleChange(e) {
    const id = e.target.value;
    let sizesSelected = this.state.sizesSelected.map(size => {
      if (this.props.typeInput === "radio") {
        return (size.id === id
          ? { ...size, checked: true }
          : { ...size, checked: false });
      } else if (this.props.typeInput === "checkbox") {
        return (size.id === id ? { ...size, checked: !size.checked } : size);
      }
      return size;
    });
    this.setState({ sizesSelected: sizesSelected });
    this.props.handleChange(sizesSelected);
  }

  render() {
    return (
      <section className={styles.clothingSizes}>
        <p>Size</p>
        <ol>
          {this.state.sizesSelected.map((size, index) => (
            <li key={index}>
              <p>{this.state.sizesSelected[size]}</p>
              <input
                type={this.props.typeInput}
                id={size}
                defaultValue={size.id}
                defaultChecked={size.checked}
                name="clothes"
                onChange={this.handleChange.bind(this)}
              />
              {size.name}
            </li>
          ))}
        </ol>
      </section>
    );
  }
}

export default ClothingSizes;
