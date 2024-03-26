import React, { useState, useEffect } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  View
} from 'framework7-react';




const HomePage = () => {
  // Would pull from the backend for this info or from the calendar
  const [reminderData, setReminderData] = useState([
    { "Time": "3:43 pm", "Label": "Headache" },
    { "Time": "8:30 pm", "Label": "Take Lisinopril 25mg" },
  ]);


  return (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavTitle sliding>Hermes</NavTitle>
      <NavTitleLarge>Hermes</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    {/* <Block>
      <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

      <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List strong inset dividersIos>
      <ListItem link="/about/" title="About"/>
      <ListItem link="/form/" title="Form"/>
    </List> */}

    {/* <BlockTitle>Modals</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill popupOpen="#my-popup">Popup</Button>
      <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
    </Block> */}

    <Block strong outline inset color="blue">
      {
        reminderData.map((reminder, index) => (
          <Block>
            {reminder.Time}, {reminder.Label}<br></br>
            <Link tabLink="#view-entry">
              <Button button outline round raised fill>Update</Button>
            </Link>

          </Block>
          
        ))
      }
    </Block>

    <BlockTitle>Symptoms</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Link tabLink="#view-entry">
        <Button button outline round raised>Blood Pressure</Button>
      </Link>
      <Link tabLink="#view-entry">
        <Button button outline round raised>Headache</Button>
      </Link>
      <Link tabLink="#view-entry">
        <Button button outline round raised>Nausea</Button>
      </Link>
    </Block>
    

    <BlockTitle>Medication</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Link tabLink="#view-entry">
        <Button button outline round raised>Lisinopril</Button>
      </Link>
      <Link tabLink="#view-entry">
        <Button button outline round raised>Acetominophen</Button>
      </Link>
    </Block>

    <BlockTitle>Wellness</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
    <Link tabLink="#view-entry">
        <Button button outline round raised>Sleep</Button>
      </Link>
      <Link tabLink="#view-entry">
        <Button button outline round raised>Mood</Button>
      </Link>
    </Block>
    {/* <List strong inset dividersIos>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List> */}
  </Page>
  );
}
export default HomePage;