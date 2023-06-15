import { ChatIcon, EmailIcon,CheckCircleIcon,StarIcon,WarningIcon } from "@chakra-ui/icons";
import {Tab,TabList,TabPanels,TabPanel,Tabs,List,ListItem,ListIcon} from "@chakra-ui/react"



export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email:mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}  />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}  />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>           
          </List>
        </TabPanel>
        <TabPanel>
        <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Email:mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Email:mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Email:mario@netninja.dev
            </ListItem>          
          </List>        
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

