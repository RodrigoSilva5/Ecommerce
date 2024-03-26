import { ButtonsContainer, NavContainer } from "./styles";
import { FormattedMessage } from "react-intl";
import { LogoutButton } from "../../styles/button";
import { StyledLi, StyledUl } from "../../styles/ul_li";
import { StyledLink } from "../../styles/link";
import { useAuth } from "../../hooks/auth";
import SelectTheme from "../selectTheme";
import { SelectLanguage } from "../selectLanguage";
 
interface NavBarProps {
    links: string[];
}

export const NavBar = ({ links }: NavBarProps) => {
    const {signOut} = useAuth()
    return (
        <NavContainer>
            <StyledUl>
                {links.map((link) => (
                    <StyledLi key={link}>
                        <StyledLink to={`/` + link}> {link}</StyledLink>
                    </StyledLi>
                ))}
            </StyledUl>
            <ButtonsContainer>
                <SelectLanguage/>
                <SelectTheme />
                <LogoutButton onClick={signOut} >
                    <FormattedMessage
                    id="signout_button"
                    defaultMessage='Sign out'
                    />
                </LogoutButton>
            </ButtonsContainer>
        </NavContainer>
    );
};
