import { NavContainer } from "./styles";
import { FormattedMessage } from "react-intl";
import { LogoutButton } from "../../styles/button";
import { StyledLi, StyledUl } from "../../styles/ul_li";
import { StyledLink } from "../../styles/link";
 
interface NavBarProps {
    links: string[];
}

export const NavBar = ({ links }: NavBarProps) => {
    return (
        <NavContainer>
            <StyledUl>
                {links.map((link) => (
                    <StyledLi key={link}>
                        <StyledLink to={`/` + link}> {link}</StyledLink>
                    </StyledLi>
                ))}
            </StyledUl>
            <div>
                <LogoutButton>
                    <FormattedMessage
                    id="signout_button"
                    defaultMessage='Sign out'
                    />
                </LogoutButton>
            </div>
        </NavContainer>
    );
};
