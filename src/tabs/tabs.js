import React, { useState } from "react";
import "./tabs.scss";

import { Link } from "react-router-dom";
import pattern from "../assets/pattern.png";
import bubbles from "../assets/bubbles.png";

const Tabs = props => {
	return (
		<>
			<div className="tab-wrap">
				<div className="tab-left">
					<div className="tab-left1">
						<div className="sub-heading">Taurpaulins for</div>
						<div className="mini-heading">LCVs, MCVs, HCVs and Small CVs</div>
					</div>
					<div className="tab-left2">
						<div className="bx">
							<div className="mini-title">COTTON TARPAULINS</div>

							<ul
								style={{
									listStyleType: "none",
									textAlign: "left",
									paddingLeft: "10px",
									justifySelf: "left"
								}}
							>
								<li class="li">Carriers Captain</li>
								<li class="li">Sky Captain</li>
							</ul>
						</div>
						<div className="bx">
							<div className="mini-title">NYLON TARPAULINS</div>

							<ul
								style={{
									listStyleType: "none",
									textAlign: "left",
									paddingLeft: "10px",
									justifySelf: "left"
								}}
							>
								<li class="li">Carriers Captain</li>
								<li class="li">Sky Captain</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="tab-right">
					<div className="tab-right1 circle one"></div>
					<div className="tab-right2 circle two"></div>
					<div className="tab-right3 circle three"></div>
					<div className="tab-right4 circle four"></div>
				</div>
				<img src={pattern} alt="My logo" className="patterns-inside" style={{ overflow: "hidden" }} />
			</div>
		</>
	);
};

export default Tabs;
