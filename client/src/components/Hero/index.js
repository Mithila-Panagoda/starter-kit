import React, { Component } from "react";
import styles from './Hero.module.scss';
import cx from 'classnames';

export default class Hero extends Component {

  renderLogo(name, imgUrl) {
    return (
      <div className={cx(styles.logo, styles[name])}>
        <img alt="zeppelin" className="logo-img"
          src={imgUrl} />
      </div>
    );
  }
  render()  {
    return (
      <div className={styles.Hero}>
        <div className={styles.left}>
          <h1> Welcome to ZepKit! </h1>
          <h2>
            The easiest way to build a Dapp with the <br />
            most trusted tools in Ethereum.
          </h2>
          <div className={styles.logos}>
            {this.renderLogo("zep","https://pbs.twimg.com/profile_images/1011632102595612672/dtbSw8w1_400x400.jpg")}
            {this.renderLogo("react", "data:image/png;base64,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")}
            {this.renderLogo("infura", "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/blkhxycyoyj4zk4trcjo")}
            {this.renderLogo("truffle", "data:image/jpeg;base64,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")}
          </div>
        </div>
        <div className={styles.right}>
          <h2> Features & Technologies</h2>
          <div className={styles.sellingpoints}>
            <div className={styles.feature}>
              - Includes <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://openzeppelin.org/">OpenZeppelin</a> as an EVM package.
            </div>
            <div className={styles.feature}>
              - Upgradeable smart contracts with <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zeppelinos.org/">ZeppelinOS </a>.
            </div>
            <div className={styles.feature}>
              - Includes <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://infura.io">
               Infura</a> setup for easy deployments & connection.
            </div>
            <div className={styles.feature}>
              - <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://truffleframework.com/">
               Truffle</a> to compile & test smart contracts.
            </div>
            <div className={styles.feature}>
              - <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/facebook/create-react-app">React </a> & Rimble to build usable and friendly interfaces.
            </div>
          </div>
        </div>
      </div>
    );
  }
}