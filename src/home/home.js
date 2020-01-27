import React from "react";

import "./home.scss";

import logo from "./../assets/logo.svg";
import whatsapp from "./../assets/whatsapp.svg";
import Tabs from "./../tabs/tabs";
import Tabs1 from "./../tabs1/tabs1";
import Tabs2 from "./../tabs2/tabs2";
import Tabs3 from "./../tabs3/tabs3";
import Banner from "./../banner/banner";

class HomeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<div className="home_wrapper">
					<div className="header">
						<div className="logo">
							<img src={logo} alt="My logo" width="78px" height="78px" />
						</div>
						<div className="logo_name">
							<div className="logo_name1">Rohini Tarpaulins</div>
							<div className="logo_name2">Rohini Mills Pvt Ltd, Chennai</div>
						</div>
					</div>
					<div className="intro">
						<div className="intro1">
							Rohini Tarpaulins - Manufacturer of Award winning, Premium quality Cotton canvas, HDPE and
							Synthetic Tarpaulins used in Trucks, CVs, Industrial Shelters, Food storage, Fisheries and
							Artificial Ponds.
						</div>
						<div className="intro2">
							<div>BUY TARPAULINS</div>
							<div>+91 98840 98840</div>
							<div>(Whatsapp, Mon-Fri, 10:00 AM to 5:00 PM)</div>
						</div>
					</div>
					<Tabs></Tabs>
					<Banner></Banner>
					<Tabs1></Tabs1>
					<Banner></Banner>
					<Tabs2></Tabs2>
					<Banner></Banner>
					<Tabs3></Tabs3>
					<div class="fab">
						<div class="btn">
							<img src={whatsapp} alt="My logo" width="32px" height="32px" />
							<a
								style={{ padding: "6px 6px 6px 2px" }}
								href="https://web.whatsapp.com/send?phone=918884196767"
								target="_blank"
								rel="noopener noreferrer"
							>
								&nbsp;88841 96767
							</a>
							<span></span>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default HomeComponent;
