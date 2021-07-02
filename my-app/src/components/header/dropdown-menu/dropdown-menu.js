import { useHistory } from "react-router-dom";
import { Container, DropDownWrap, DropItemWrap, DropDownItem, DropImage, P } from "./styling";

const DropdownMenu = ({ props, primary }) => {
  console.log("dropdown-menu");
  const history = useHistory();

  const fucking = (route) => {
    history.push(`/landing/${route}`); 
  };

  return (
    <Container>
      <DropDownWrap fuck={primary}>
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
