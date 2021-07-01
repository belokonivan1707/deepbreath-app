import { Container, DropDownWrap, DropItemWrap, DropDownItem, DropImage, P } from "./styling";

const DropdownMenu = ({ props }) => {
  return ( 
    <Container>
      <DropDownWrap>
        <DropItemWrap>
          {props?.map((el) => {
            return (
              <DropDownItem key={el.id}>
                <DropImage style={{ backgroundImage: `url(${el.image})` }} />
                <P>{el.title}</P>
              </DropDownItem>
            );
          })}
        </DropItemWrap>
      </DropDownWrap>
    </Container>
  );
};

export default DropdownMenu;
