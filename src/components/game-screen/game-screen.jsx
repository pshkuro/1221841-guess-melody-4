import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Mistakes from "../mistakes/mistakes.jsx";
import {GameType} from "../../constants/game.js";

function GameScreen({type, children, count}) {
  return (
    <section className={`game game--${type}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <Mistakes count={count}/>
      </header>

      {children}

    </section>
  );
}


GameScreen.propTypes = {
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  count: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  count: state.mistakes,
});

export {GameScreen};
export default connect(mapStateToProps)(GameScreen);
