import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/clothing-sizes.module.scss';

function flatSizesChecked(sizes) {
  return sizes.filter((size) => size.checked).flatMap((size) => size.id);
}

class ClothingSizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizesSelected: [
        {
          id: 'small',
          name: 'Small',
          checked: false,
        },
        {
          id: 'medium',
          name: 'Medium',
          checked: true,
        },
        {
          id: 'large',
          name: 'Large',
          checked: false,
        },
      ],
    };
  }

  componentWillMount() {
    const { onChange } = this.props;
    const { sizesSelected } = this.state;
    onChange(flatSizesChecked(sizesSelected));
  }

  handleChange({ target }) {
    const id = target.value;
    const { sizesSelected } = this.state;
    const { typeInput, onChange } = this.props;
    let newSizesSelected;
    if (typeInput === 'radio') {
      newSizesSelected = sizesSelected.map((size) => ({
        ...size,
        checked: size.id === id,
      }));
    } else if (typeInput === 'checkbox') {
      newSizesSelected = sizesSelected.map((size) => (
        size.id === id ? { ...size, checked: !size.checked } : size));
    }

    this.setState({ sizesSelected: newSizesSelected });
    onChange(this.flatSizesChecked(newSizesSelected));
  }

  render() {
    const { sizesSelected } = this.state;
    const { typeInput } = this.props;

    return (
      <section className={styles.clothingSizes}>
        <p>Size</p>
        <ol>
          {sizesSelected.map((size) => (
            <li key={size.id}>
              <p>{sizesSelected[size]}</p>
              <input
                type={typeInput}
                id={size}
                defaultValue={size.id}
                defaultChecked={size.checked}
                name="clothes"
                onChange={this.handleChange.bind(this)}
              />
              <label htmlFor={size}>{size.name}</label>
            </li>
          ))}
        </ol>
      </section>
    );
  }
}

ClothingSizes.propTypes = {
  typeInput: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ClothingSizes.defaultProps = {
  typeInput: 'radio',
};

export default ClothingSizes;
