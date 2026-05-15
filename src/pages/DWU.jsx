import React from "react";
import { useParams } from "react-router-dom";
import * as D from "../styles/StyledDWU";

const DWU = ({ dataList }) => {
  const { Id } = useParams();
  const post = Id ? dataList.find((item) => item.Id === parseInt(Id)) : null;

  return (
    <D.Container>
      <D.Background>
        <D.Logo>
          <img
            id="dwu"
            src={`${process.env.PUBLIC_URL}/images/DWU_Logo.png`}
            alt="동덕여대_로고"
          />
        </D.Logo>
        <D.Name>
          <div id="name">{post && post.Name}</div>
          <div id="is">님</div>
        </D.Name>
        <D.Team>
          <div id="num">{post && post.Team}</div>
          <div id="is">조</div>
        </D.Team>

        <D.Select>
          <D.Title>주제 선택</D.Title>
          <D.Text>
            각 파트 세션이 끝난 후<br />
            모두 한 자리에 모여 주제를 정하게 됩니다.
            <br />
            각 주제마다 팀 수 제한이 있습니다.
            <br />
            <br />
            가위바위보를 통해
            <br />
            주제 선택 우선권을 갖게됩니다.
            <br />
            <br />
            팀원들끼리 상의하여 원하는 주제의
            <br />
            우선순위를 정해주세요.
          </D.Text>
        </D.Select>

        <D.Topic>
          <D.Title style={{ marginTop: "18px" }}>주제</D.Title>
          <D.Text2 style={{ marginTop: "19px" }}>
          </D.Text2>
        </D.Topic>
      </D.Background>
    </D.Container>
  );
};

export default DWU;
