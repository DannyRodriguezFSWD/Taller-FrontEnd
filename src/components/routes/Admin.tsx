import React, { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import useApp from "../../hooks/useApp";
import useAuth from "../../hooks/useAuth";
import { themes } from "../../styles/ColorStyles";
import { Caption, H1} from "../../styles/TextStyles";


const Admin = () => {
  let history = useHistory();
  let location = useLocation();
  const { t } = useTranslation();
  const { admin } = useAuth();
  const { addNotification, removeLastNotification } = useApp();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const [version, setVersion] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  let { from } = (location.state as any) || { from: { pathname: "/" } };


  async function doAdmin(event: FormEvent<HTMLFormElement>) {
    dismissError();
    event.preventDefault();
    if (!readyToSubmit()) {
      setErrorMsg(t("admin.err_invalid_form"));
      return;
    }

    try {
      addNotification(t("loader.text"));
      await admin(title, description, link, tags, version);
      history.replace(from);
    } catch (e) {
      setErrorMsg(t("admin.err_inv_lgn"));
    } finally {
      removeLastNotification();
    }
  }

  function onChangeAnyInput() {
    setErrorMsg("");
  }

  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
    onChangeAnyInput();
  }

  function onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
    onChangeAnyInput();
  }

  function onChangeLink(e: ChangeEvent<HTMLInputElement>) {
    setLink(e.target.value);
    onChangeAnyInput();
  }

  function onChangeTags(e: ChangeEvent<HTMLInputElement>) {
    setTags(e.target.value);
    onChangeAnyInput();
  }

  function onChangeVersion(e: ChangeEvent<HTMLInputElement>) {
    setVersion(e.target.value);
    onChangeAnyInput();
  }

  function readyToSubmit(): boolean {
    // TODO: 
    return title !== "" && description !== "" && link !== "" && tags !== "" && version !== "";
  }

  function dismissError() {
    setErrorMsg("");
  }
 
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleForm>{t("admin.header")}</TitleForm>
        <AdminPannel onSubmit={doAdmin}>
          { errorMsg && <ErrorDescription>{errorMsg}</ErrorDescription>}
          <AdminForm name="title" type="text" placeholder={t("admin.input_title")} value={title} onChange={onChangeTitle}/>
          <AdminForm name="description" type="text" placeholder={t("admin.input_description")} value={description} onChange={onChangeDescription}/>
          <AdminForm name="link" type="text" placeholder={t("admin.input_link")} value={link} onChange={onChangeLink}/>
          <AdminForm name="tags" type="text" placeholder={t("admin.input_tags")} value={tags} onChange={onChangeTags}/>
          <AdminForm name="version" type="text" placeholder={t("admin.input_version")} value={version} onChange={onChangeVersion}/>
          <ButtonGroup>
            <ButtonForm type="submit" value={t("admin.button_accept") != null ? t("admin.button_accept") as string : "Create"}  />
            <ButtonFormD type="submit" value={t("admin.button_delete") != null ? t("admin.button_delete") as string : "Delete"}  />
          </ButtonGroup>
        </AdminPannel>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
  @media (min-width: 2500px) {
    padding-bottom: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 30px 180px 30px;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  row-gap: 20px;

  @media (max-width: 750px) {
    justify-content: center;
    padding: 30px 0px 180px 0px;
  }

  @media (max-width: 500px) {
    justify-content: stretch;
    justify-items: stretch;
    padding: 30px 0px 180px 0px;
  }
`;

const TitleForm = styled(H1)`
  text-align: center;
  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`

const AdminPannel = styled.form`
  padding: 20px 40px;
  width: 400px;
  ${themes.light.card};
  border-radius: 8px;

  display: grid;
  row-gap: 16px;
  grid-template-rows: auto;

  @media (prefers-color-scheme: dark) {
    ${themes.dark.card};
  }

  @media (max-width: 500px) {
    width: auto;
    margin: 0px 20px;
    padding: 20px;
  }


`;

const ErrorDescription = styled(Caption)`
  color: ${themes.light.warning};
`;

const AdminForm = styled.input`
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 36px;
  color: ${themes.light.text1};
  background-color: ${themes.light.backgroundForm};
  padding-left: 8px;

  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
    background-color: ${themes.dark.backgroundForm};
  }

`;

const ButtonForm = styled.input`
  height: 36px;
  max-width: 6em;
  display: block-inline;
  border-radius: 4px;
  border: none;
  margin-inline-start: 1em;
  background-color: ${themes.light.primary};
  color: ${themes.dark.text1};

  @media (prefers-color-scheme: dark) {
    background-color: ${themes.dark.primary};
  }
`;

const ButtonFormD = styled.input`
  height: 36px;
  max-width: 6em;
  display: block-inline;
  border-radius: 4px;
  border: none;
  margin-inline-start: 1em;
  background-color: ${themes.light.warning};
  color: ${themes.dark.text1};

  @media (prefers-color-scheme: dark) {
    background-color: ${themes.light.warning};
  }
`;

const ButtonGroup = styled.div`
display: flex;
flex-direction: row-reverse;

`;

export default Admin;
