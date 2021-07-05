import { useRef } from "react";
import { useHistory } from "react-router-dom";
import useClickOutside from "../../../hooks/useClickOutside";
import { Container, DropDownWrap, DropItemWrap, DropDownItem, DropImage, P } from "./styling";

const DropdownMenu = ({ props, primary, onClickOutside }) => {
  const clickRef = useRef();
  const history = useHistory();

  useClickOutside(clickRef, onClickOutside);

  const fucking = (route) => {
    history.push(`/landing/${route}`);
  };

  return (
    <Container>
      <DropDownWrap fuck={primary} ref={clickRef}>
        <DropItemWrap fuck={primary}>
          {props?.map((el) => {
            return (
              <DropDownItem key={el.id} onClick={() => fucking(el.route)}>
                <DropImage style={{ backgroundImage: `url(${el.image})` }} />
                <P fuck={primary}>{el.title}</P>
              </DropDownItem>
            );
          })}
        </DropItemWrap>
      </DropDownWrap>
    </Container>
  );
};

export default DropdownMenu;
