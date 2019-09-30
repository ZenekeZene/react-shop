import React from "react";
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
          checked: true
        },
        {
          id: "large",
          name: "Large",
          checked: false
        }
      ]
    };
  }

  componentWillMount() {
    this.props.onChange(this.flatSizesChecked(this.state.sizesSelected));
  }

  handleChange({ target }) {
    const id = target.value;
    let sizesSelected;
    if (this.props.typeInput === "radio") {
      sizesSelected = this.state.sizesSelected.map(size =>
        size.id === id
          ? { ...size, checked: true }
          : { ...size, checked: false }
      );
    } else if (this.props.typeInput === "checkbox") {
      sizesSelected = this.state.sizesSelected.map(size =>
        size.id === id ? { ...size, checked: !size.checked } : size
      );
    }

    this.setState({ sizesSelected: sizesSelected });
    this.props.onChange(this.flatSizesChecked(sizesSelected));
  }

  flatSizesChecked(sizes) {
    return sizes.filter(size => size.checked).flatMap(size => size.id);
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
