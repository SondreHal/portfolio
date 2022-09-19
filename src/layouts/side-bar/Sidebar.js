import * as S from "../components/navigationStyle";
import { Data } from "../utils/navigationData";

export default function Sidebar() {
	return (
		<nav>
			<S.Aside>
				<div>
					<S.ImgContainer>
						<S.Img src={require(`../../assets/images/sondre.png`)} alt="Sondre" />
					</S.ImgContainer>
					<S.Name>Sondre Halvorsen</S.Name>
					<ul>
						{Data.map((val, key) => {
							return (
								<div key={key + 1}>
									<S.Category key={key} to={val.link}>
										<S.CategoryIcon key={key + 2} className="icon">
											{val.icon}
										</S.CategoryIcon>
										<S.CategoryTitle key={key + 3} className="title">
											{val.title}
										</S.CategoryTitle>
									</S.Category>
								</div>
							);
						})}
					</ul>
				</div>
				<S.CopyrightContainer>
					<S.CopyrightIcon className="fa-regular fa-copyright"></S.CopyrightIcon>
					<S.CopyrightYearName>2022 - Sondre Halvorsen</S.CopyrightYearName>
				</S.CopyrightContainer>
			</S.Aside>
		</nav>
	);
}
