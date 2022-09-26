import React from "react";
import styled from "styled-components";
import Trackter from "../images/trackter.png";
import TrackterStorage from "../images/trackterstorage.png";
import TimeinFarm from "../images/timeinfarm.png";
import HeaderSection from "../components/HeaderSection";
import SectionRightImg from "../components/SectionRightImg";
import SectionLeftImg from "../components/SectionLeftImg";
function ServicePage() {
  console.log(Trackter);
  console.log(TrackterStorage);
  return (
    <Container>
      <HeaderSection bgImage={Trackter} />
      <SectionLeftImg
        bgImage={TrackterStorage}
        title={"더 이상 소유하지 말고,\n 빌려서 사용하세요."}
        description={
          "농기계 보관할 장소 필요없이, \n 농기계가 필요할 땐 그린렌탈"
        }
      />
      <SectionRightImg
        bgImage={TimeinFarm}
        title={"원하는 시간과 계절에,\n 빌려서 사용하세요."}
        description={
          "낮에는 트랙터, 가을에는 콤바인을\n 농기계가 필요할 땐 그린렌탈"
        }
      />
      <SectionLeftImg bgImage={TrackterStorage} title="3" />
      <SectionRightImg bgColor="yellow" title="4" />
    </Container>
  );
}

export default ServicePage;

const Container = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
`;
