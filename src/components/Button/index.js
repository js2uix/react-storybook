import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Button.css'

function Button ({title, active, onActiveHandler}) {

  const [onActive, setActive] = useState(active);

  /**
   * setActiveHandler
   */
  function setActiveHandler() {
    setActive(!onActive);
    onActiveHandler(onActive);
  }

  return (
    <button type="button" class={`${(onActive) ? 'on' : ''}`} onClick={setActiveHandler}>
      {title}
    </button>
  );
}

Button.propTypes = {
  /** 버튼의 title 값 */
  title: PropTypes.string,
  active: PropTypes.bool,
  onActiveHandler: PropTypes.func,
}

Button.defaultProps = {
  title: '안녕하세요',
  active: false,
  onActiveHandler: () => {},
}

export default Button;